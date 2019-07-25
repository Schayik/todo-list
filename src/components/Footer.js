import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <StyledFooter className='compress'>
    <p>Copyright © 2019  ConnectingTheDots. All rights reserved.</p>
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
  }
`
