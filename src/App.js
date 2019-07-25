import React from 'react';
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <div className="App">
      <StyledApp />
      <h1>App</h1>
    </div>
  );
}

export default App;

const StyledApp = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Larsseit';
  }
`
