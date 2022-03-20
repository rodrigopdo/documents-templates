import styled from 'styled-components';

const Container = styled.div`
  background-color: #222;
  padding: 0.25rem;
  height: 100%;
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 380px;
  background-color: #222;

  &.hide {
    display: none;
  }
`;