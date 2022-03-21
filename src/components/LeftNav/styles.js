import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  @media print {
    display: none;
  }
`;

export default Wrapper;