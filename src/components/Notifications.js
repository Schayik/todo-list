import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getText } from '../helpers'

const Notifications = ({ notifications }) => (
  <StyledNotifications>
    {notifications.map(notification => (
      <li key={notification.todoName + notification.timeAdded} className={notification.type.toLowerCase()}>
        <div>
          <div className='inner-wrapper'>
            <p className='type'>Task {notification.type.toLowerCase()}</p>
            <button onClick={() => console.log('remove:', notification.todoName)}>x</button>
          </div>
          <p className='name'>{getText(notification.todoName, notification.type)}</p>
        </div>
        <p className='time'>{notification.timeAdded}</p>
      </li>
    ))}
  </StyledNotifications>
)

const mapStateToProps = ({ notifications }) => ({ notifications })
export default connect(mapStateToProps)(Notifications)

const StyledNotifications = styled.ul`
  position: absolute;
  top: calc(100%);
  right: 0;
  z-index: 1;

  list-style: none;
  padding: 0;

  li {
    background-color: var(--white);
    border-left: 4px var(--black) solid;
    border-radius: 4px;
    box-shadow: 0 0 6px 0 var(--grey);

    margin-top: 16px;
    padding: 12px;

    width: 280px;
    min-height: 92px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.removed {
      border-color: var(--red);
    }
    &.added {
      border-color: var(--blue);
    }
    &.completed {
      border-color: var(--green);
    }
  }

  .inner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p.type {
    font-size: 13px;
  }
  p.name {
    margin-top: 2px;
    color: var(--grey);
    font-size: 13px;
  }
  p.time {
    margin-top: 2px;
    color: var(--grey);
    font-size: 11px;
  }
`
