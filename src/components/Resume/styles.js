import styled from 'styled-components';

export const ResumeContainer = styled.div`
  width: 210mm;
  height: 296mm;
  margin: auto;
  background-color: white;
  border: 1px solid black;
  margin: 6mm;
  transform-origin: top;
  transform: ${({ zoom }) => `scale(${1 + zoom})`};
  margin-bottom: ${({ zoom }) => {
    if (zoom < 0) return 260 * zoom;
    if (zoom > 0) return 320 * zoom;
    return 6;
  }}mm;

  @media print {
    border: none;
    overflow: inherit;
    margin: 0;
    transform: none;
  } 
`;