import { useState } from "react";
import { Container, Header, HeaderText, Body } from "./App.styles";

import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { useEffect } from "react";


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderText>
          Sistema Financeiro
        </HeaderText>
      </Header>
      <Body>
        
        {/* Tabela de Itens */}

        <TableArea list={filteredList}/>
      </Body>
    </Container>

  )
}

export default App;
