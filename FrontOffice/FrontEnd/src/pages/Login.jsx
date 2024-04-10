import {
  InputField,
  ImageContainer,
  MainLoginContainer,
  LoginContainer,
  ButtonLogar,
  LoginPage,
} from "../styles/Login.styles";
import Logo from "../assets/Component5.png";
import { Link } from "react-router-dom";

const handleSubmit = (event) => {
  event.preventDefault();

  const fd = new FormData(event.target);
  for (const value of fd.values()) {
    console.log(value);
  }
};

function Login() {
  return (
    <LoginPage>
      <MainLoginContainer>
        <LoginContainer onSubmit={handleSubmit}>
          <h1>login</h1>

          <InputField>
            <label>Email</label>
            <input type="email" name="email" />
          </InputField>

          <InputField>
            <label>Senha</label>
            <input type="password" name="password" />
          </InputField>

          <ButtonLogar>Logar</ButtonLogar>

          <span>
            <b>
              {" "}
              <Link to="/Cadastro">Registre-se</Link>{" "}
            </b>
            <label> se não tiver uma conta</label>
          </span>
        </LoginContainer>

        <ImageContainer>
          <img src={Logo} alt="Logo NRP" />
        </ImageContainer>
      </MainLoginContainer>
    </LoginPage>
  );
}

export default Login;
