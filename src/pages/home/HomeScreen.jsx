import Header from "../../shared/header/Header";
import {
  Button,
  Container,
  ContainerButtons,
  ContainerOptions,
} from "./styles";

export default function HomeScreen() {
  return (
    <Container>
      <Header />
      <ContainerOptions>
        <ContainerButtons>
          <Button className="select">Disciplinas</Button>
          <Button>Pessoa Instrutora</Button>
          <Button>Adicionar</Button>
        </ContainerButtons>
      </ContainerOptions>
    </Container>
  );
}
