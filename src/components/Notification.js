import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CloseIcon from '../images/CloseIcon'
import { removeNotificationAction } from '../actions'
import { getText, getTime } from '../helpers'

const Notification = ({ id, notification, removeNotification }) => (
  <StyledNotification className={notification.type.toLowerCase()}>
    <div>
      <div className='inner-wrapper'>
        <p className='type'>Task {notification.type.toLowerCase()}</p>
        <button onClick={() => removeNotification(id)}>
          <CloseIcon />
        </button>
      </div>
      <p className='name'>{getText(notification.todoText, notification.type)}</p>
    </div>
    <p className='time'>Added {getTime(notification.todoAdded)}</p>
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

  button {
    height: 16px;
    width: 16px;
    img, svg {
      fill: var(--grey);
      stroke: var(--grey);
      height: 8px;
      width: 8px;
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
    line-height: 1.2;
  }
  p.time {
    margin-top: 4px;
    color: var(--grey);
    font-size: 11px;
  }

  @media(max-width: ${props => props.theme.breakpoints.phone}px) {
    margin-top: 16px;
    width: 200px;
    min-height: 0;
    padding: 8px;

    .inner-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p.type {
      font-size: 11px;
    }
    p.name {
      font-size: 11px;
    }
    p.time {
      font-size: 10px;
    }
  }
`
