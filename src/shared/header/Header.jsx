import {
  Container,
  ContainerSearch,
  ContainerTop,
  ContainerUser,
  Exit,
  Icon,
  Logo,
  Text,
} from "./styles";
import logo from "../../assets/imgs/Icon.png";
import { IoLogOutOutline } from "react-icons/io5";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  function logout() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      {user === null ? (
        <Container>
          <Icon src={logo} alt="icon" width="61px" height="61px" />
          <Text>
            Repo<p>Provas</p>
          </Text>
        </Container>
      ) : (
        <Container>
          <ContainerTop>
            <ContainerUser>
              <Logo>
                <Icon src={logo} alt="icon" width="61px" height="61px" />
                <Text>
                  Repo<p>Provas</p>
                </Text>
              </Logo>
              <Exit>
                <IoLogOutOutline className="icon" onClick={logout} />
              </Exit>
            </ContainerUser>
            <ContainerSearch>
              <input
                type="password"
                placeholder="Pesquise por disciplina"
                //value={userLogin.password}
                name="password"
                //onChange={changeInput}
              />
            </ContainerSearch>
          </ContainerTop>
        </Container>
      )}
    </>
  );
}
