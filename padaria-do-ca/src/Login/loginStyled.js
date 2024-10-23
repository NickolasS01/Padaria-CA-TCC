const { default: styled } = require("styled-components");

const LoginStyled = styled.section`
#Corpo {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f3e5ab;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

#login-form-box {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#login-form-box h2 {
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
}

.textbox {
  margin-bottom: 15px;
}

.textbox input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.btn {
  width: 100%;
  padding: 12px;
  background-color: #ffc107;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.btn:hover {
  background-color: #e0a800;
}

.form-error {
  color: red;
  font-size: 12px;
}`
export default LoginStyled;