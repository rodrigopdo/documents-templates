import styled from 'styled-components';

export const Sider = styled.nav`
  height: 100vh;
  max-width: 60px;
  font-size: 1.4rem;
  padding: 8px;
  background: #222;
`;

export const IconWrapper = styled.div`
  outline-color: transparent;
  margin-bottom: 1rem;
`;

export const IconButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 40px;
  background: transparent;
  border: 0;
  border-radius: 2px;
  padding: 0;
  color: rgb(230, 230, 230);
`;