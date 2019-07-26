import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { removeNotificationAction } from '../actions'
import { getText } from '../helpers'

const Notification = ({ id, notification, removeNotification }) => (
  <StyledNotification className={notification.type.toLowerCase()}>
    <div>
      <div className='inner-wrapper'>
        <p className='type'>Task {notification.type.toLowerCase()}</p>
        <button onClick={() => removeNotification(id)}>x</button>
      </div>
      <p className='name'>{getText(notification.todoText, notification.type)}</p>
    </div>
    <p className='time'>{notification.todoAdded}</p>
  </StyledNotification>
)

const mapStateToProps = ({ notifications }, { id }) => ({
  notification: notifications[id],
})
const mapDispatchToProps = dispatch => ({
  removeNotification: id => dispatch(removeNotificationAction(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Notification)

const StyledNotification = styled.ul`
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
