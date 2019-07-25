import React from 'react'
import Switch from 'react-switch'
import styled from 'styled-components'

const HideTodo = ({ hideCompleted, toggleHide }) => (
  <StyledHideTodo>
    <div>
      <h3>Show completed tasks</h3>
      <p>Switch to hide</p>
    </div>
    <Switch
      onChange={() => toggleHide()}
      checked={hideCompleted}
      offColor='#139ebe'
      onColor='#2ad175'
      offHandleColor='#fff'
      onHandleColor='#fff'
      uncheckedIcon={false}
      checkedIcon={false}
      width={36}
      height={20}
      handleDiameter={16}
    />
  </StyledHideTodo>
)

export default HideTodo

const StyledHideTodo = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;

  h3 {
    font-size: 16px;
  }
  p {
    margin-top: 8px;
    color: var(--grey);
    font-size: 16px;
  }


`
