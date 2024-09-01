const express = require('express');
const app = express();

const mysql = require("mysql");
const cors = require('cors');
const bodyParser = require('body-parser');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'padaria_camargo'
});

app.get('/', (req, res) => {
  db.query(
    "INSERT INTO usuari (nomeCompleto, telefone, curso, turma, turno, email, senha) VALUES ('Cauã Corrêa', '910346461', 'Desenvolvimento', 'Turma A', 'Manhã', 'caua@example.com', 'minhaSenhaSegura')",
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao inserir dados no banco de dados.');
      } else {
        res.send('Dados inseridos com sucesso!');
      }
    }
  );
});

app.use(cors());
app.use(bodyParser.json());

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar no banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

app.post('/cadastro', (req, res) => {
  const { nomeCompleto, telefone, curso, turma, turno, email, senha } = req.body;
  const sql = 'INSERT INTO usuarios (nomeCompleto, telefone, curso, turma, turno, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(sql, [nomeCompleto, telefone, curso, turma, turno, email, senha], (err, result) => {
    if (err) {
      console.log('Erro ao inserir no banco de dados:', err);
      res.status(500).send('Erro ao cadastrar');
    } else {
      res.send('Cadastro realizado com sucesso!');
    }
  });
});
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.log('Erro ao buscar usuário no banco de dados:', err);
      res.status(500).send('Erro no servidor');
    } else if (results.length === 0) {
      res.status(400).send('Usuário não encontrado');
    } else {
      const user = results[0];
      const match = await bcrypt.compare(senha, user.senha);
      
      if (match) {
        res.send('Login bem-sucedido!');
      } else {
        res.status(400).send('Senha incorreta');
      }
    }
  });
});


app.listen(3005, () => {
  console.log('Servidor rodando na porta 3003');
});
