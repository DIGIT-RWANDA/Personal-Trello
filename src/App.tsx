import React from 'react';
import { AppContainer } from './styles';
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import {AddNewItem} from "./components/AddNewItem";

function App(): JSX.Element {
  return (
    <AppContainer>
      <Column text='JS'>
          <Card text='Closure' />
      </Column>
        <Column text='TS'>
            <Card text='Interfaces' />
        </Column>
        <Column text='C#'>
            <Card text='Namespace' />
        </Column>
        <AddNewItem
            onAdd={() => console.log('added')}
            toggleButtonText={'+ Add a new item '}
        />
    </AppContainer>
  );
}

export default App;
