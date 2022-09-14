import { Container, Icon, Text } from "./styles";
import logo from "../../assets/imgs/Icon.png";

export default function Header() {
  return (
    <Container>
      <Icon src={logo} alt="icon" width="61px" height="61px" />
      <Text>
        Repo<p>Provas</p>
      </Text>
    </Container>
  );
}
