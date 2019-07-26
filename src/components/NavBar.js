import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Notifications from './Notifications'
import logo from '../images/logo.jpg'
import notifications from '../images/notifications.svg'

const NavBar = ({ count }) => (
  <StyledNavBar>
    <div className='compress'>
      <div className='content positioner'>
        <img className='logo' src={logo} alt='ConnectingTheDots' />
        <div className='positioner'>
          <img className='notifications' src={notifications} alt='notifications' />
          {count > 0 &&
            <div className='count'>
              <p>{count}</p>
            </div>
          }
        </div>
        <Notifications />
      </div>
    </div>
  </StyledNavBar>
)

const mapStateToProps = ({ notifications }) => ({
  count: Object.keys(notifications).length,
})
export default connect(mapStateToProps)(NavBar)

const StyledNavBar = styled.div`
  width: 100vw;

  .positioner {
    position: relative;

    .count {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;

      background-color: var(--white);
      border-radius: 50%;
      width: 12px;
      height: 12px;

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: var(--red);
        font-size: 11px;
        font-weight: 700;
      }
    }
  }

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
