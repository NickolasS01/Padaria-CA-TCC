import express from 'express';
import Validation from '../../utils/validation/index.js';
import db from '../../config/db.js';
import bcrypt from 'bcrypt';

const valid = new Validation();
const router = express.Router();
const saltRounds = 10; // Número de saltos para hash da senha

// Rota de cadastro
router.post('/cadastro', async (req, res) => {
    const { nomeCompleto, telefone, curso, turma, turno, email, senha } = req.body;
    
    // Validar dados (comentado na sua versão, mas recomendo manter)
    // const existError = valid.validationDataExist([{ nomeCompleto, telefone, curso, turma, turno, email, senha }]);
    // if (existError) return res.status(400).send(existError);

    try {
        // Criptografar a senha antes de salvar
        const hashedPassword = await bcrypt.hash(senha, saltRounds);
        
        const sql = 'INSERT INTO usuarios (nomeCompleto, telefone, curso, turma, turno, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, [nomeCompleto, telefone, curso, turma, turno, email, hashedPassword], (err, result) => {
            if (err) {
                console.log('Erro ao inserir no banco de dados:', err);
                return res.status(500).send('Erro ao cadastrar');
            }
            res.status(201).send('Cadastro realizado com sucesso!');
        });
    } catch (error) {
        console.error('Erro ao criptografar a senha:', error);
        res.status(500).send('Erro interno no servidor');
    }
});

// Rota de login
router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao consultar o banco de dados.');
        }
        
        if (results.length === 0) {
            return res.status(400).send('Usuário não encontrado.');
        }

        const user = results[0];
        
        // Verificar a senha utilizando bcrypt
        bcrypt.compare(senha, user.senha, (err, match) => {
            if (err) {
                console.error('Erro ao comparar as senhas:', err);
                return res.status(500).send('Erro interno no servidor.');
            }
            
            if (!match) {
                return res.status(400).send('Email ou senha incorretos.');
            }

            // Login bem-sucedido
            res.status(200).send('Login bem-sucedido!');
        });
    });
});

export default router;
