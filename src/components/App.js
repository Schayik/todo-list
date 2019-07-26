import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import NavBar from './NavBar'
import TodoContainer from './TodoContainer'
import Footer from './Footer'
import { THEME } from './GlobalStyle'

const App = () => (
  <ThemeProvider theme={THEME}>
    <StyledApp>
      <GlobalStyle />
      <NavBar />
      <TodoContainer />
      <Footer />
    </StyledApp>
  </ThemeProvider>
)

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`
