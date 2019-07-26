import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Notification from './Notification'

const Notifications = ({ notifications }) => (
  <StyledNotifications>
    {Object.keys(notifications).map(notificationKey => (
      <Notification key={notificationKey} id={notificationKey} />
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
`
