import styled from 'styled-components';
import { Flex } from '../../styles/grid';

export const ResumeContainer = styled(Flex)`
  height: 100%;
  padding: 40px 25px;
  column-gap: 10px;
  color: black;
  background-color: white;

  @media print {
    border: none;
  }
`;