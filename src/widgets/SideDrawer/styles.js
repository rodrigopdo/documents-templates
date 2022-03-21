import styled from 'styled-components';

export const Container = styled.div`
  background-color: #333333;
  padding: 0.25rem;
  height: 100%;
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 380px;
  background-color: #333333;

  &.hide {
    display: none;
  }
`;