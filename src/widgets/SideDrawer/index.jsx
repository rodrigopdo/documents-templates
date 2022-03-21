import React from 'react';
import { Container, Wrapper } from './styles';

const SideDrawer = ({ isShown, children }) => {
  return (
    <Wrapper className={isShown ? '' : 'hide'}>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default SideDrawer;