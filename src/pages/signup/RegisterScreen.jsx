import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import {
  Button,
  ButtonGitHub,
  Container,
  ContainerRegister,
  Division,
  Footer,
  Form,
  Line,
  Top,
} from "./styles";
import Loader from "../../shared/loading/Loader";
import Header from "../../shared/header/Header";
import Swal from "sweetalert2";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userRegister, setUserregister] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function register(e) {
    e.preventDefault();
    setLoading(true);

    api
      .post("/signup", { ...userRegister })
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Usuário já existe",
            confirmButtonColor: "#1976d2",
          });
          return;
        }
        Swal.fire({
          icon: "error",
          title: "Preencha os campos corretamente!",
          confirmButtonColor: "#1976d2",
        });
      });
  }

  function registerGitHub() {
    console.log("register github");
  }

  function changeInput(e) {
    setUserregister({ ...userRegister, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      {loading ? <Loader /> : <></>}
      <Header />
      <ContainerRegister>
        <Top>Cadastro</Top>
        <ButtonGitHub onClick={registerGitHub}>
          ENTRAR COM O GITHUB
        </ButtonGitHub>
        <Division>
          <Line />
          <p>ou</p>
          <Line />
        </Division>
        <Form>
          <input
            type="email"
            placeholder="Email"
            value={userRegister.email}
            name="email"
            onChange={changeInput}
          />
          <input
            type="password"
            placeholder="Senha"
            value={userRegister.password}
            name="password"
            onChange={changeInput}
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            value={userRegister.passwordConfirm}
            name="passwordConfirm"
            onChange={changeInput}
          />
        </Form>
        <Footer>
          <Link to="/">Já possuo cadastro</Link>
          <Button onClick={register}>CADASTRAR</Button>
        </Footer>
      </ContainerRegister>
    </Container>
  );
}
