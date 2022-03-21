import styled from 'styled-components';
import { Flex } from '../../styles/grid';

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 25px;
  
  color: black;
  background-color: white;

  @media print {
    border: none;
  }
`;

export const Title = styled.h2 `
  margin: 0 auto 10px;
  font-size: 1rem;
  font-weight: 500;
`;

