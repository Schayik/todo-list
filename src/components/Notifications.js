import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Notification from './Notification'

const Notifications = ({ notifications }) => {
  const keys = Object.keys(notifications)
  const lastFive = keys.slice(-3)

  return (
    <StyledNotifications>
      {lastFive.map(key => (
        <Notification key={key} id={key} />
      ))}
    </StyledNotifications>
  )
}

const mapStateToProps = ({ notifications }) => ({ notifications })
export default connect(mapStateToProps)(Notifications)

const StyledNotifications = styled.ul`
  position: absolute;
  top: calc(100%);
  right: 0;
  z-index: 1;

  list-style: none;
  padding: 0;
  margin: 0;
`
