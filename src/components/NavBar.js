import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo.jpg'
import notifications from '../images/notifications.svg'

const NavBar = () => (
  <StyledNavBar>
    <div className='compress'>
      <div className='content'>
        <img className='logo' src={logo} alt='ConnectingTheDots' />
        <img className='notifications' src={notifications} alt='notifications' />
      </div>
    </div>
  </StyledNavBar>
)

export default NavBar

const StyledNavBar = styled.div`
  width: 100vw;

  .content {
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px var(--grey) solid;

    .logo {
      height: 50px;
    }
    .notifications {
      height: 40px;
    }
  }

`
