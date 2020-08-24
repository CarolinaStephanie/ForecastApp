import styled from 'styled-components/native';

import Spacing from './Spacing';

const Row = styled.View`
  flex-direction: row;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};

  ${Spacing}
`;

export default Row;
