import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <StyledFooter className='compress'>
    <p><span>Copyright © 2019.</span> <span>ConnectingTheDots.</span> <span>All rights reserved.</span></p>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;

  p {
    color: var(--grey);
    font-size: 13px;
    text-align: center;
    line-height: 1.4;
    span {
      display: inline-block;
    }
  }
`
