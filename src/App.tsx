import React from 'react';
import { AppContainer } from './styles';
import { Column } from "./components/Column";
import { Card } from "./components/Card";

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
    </AppContainer>
  );
}

export default App;
