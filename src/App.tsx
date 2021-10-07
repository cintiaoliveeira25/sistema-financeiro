import { Container, Header, HeaderText, Body } from "./App.styles";
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';

function App() {
  return (
    <Container>
      <Header>
        <HeaderText>
          Sistema Financeiro
        </HeaderText>
      </Header>
      <Body>
        Corpo Projeto
      </Body>
    </Container>

  )
}

export default App;
