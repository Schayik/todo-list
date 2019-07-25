import React from 'react'
import styled from 'styled-components'

import GlobalStyle from './GlobalStyle'
import NavBar from './NavBar'
import TodoList from './TodoList'
import Footer from './Footer'

const App = () => (
  <StyledApp>
    <GlobalStyle />
    <NavBar />
    <TodoList />
    <Footer />
  </StyledApp>
)

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`
