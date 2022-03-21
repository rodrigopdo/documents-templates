import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
`;

export const FlexHC = styled(Flex)`
  justify-content: center;
`;

export const FlexVC = styled(Flex)`
  align-items: center;
`;

export const FlexHVC = styled(Flex)`
  justify-content: center;
  align-items: center;
`;