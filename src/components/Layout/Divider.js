import styled from 'styled-components/native';
import COLORS from 'config/colors';

import Spacing from './Spacing';

const Divider = styled.View`
  height: 1px;
  width: ${({ width }) => width || 'auto'};
  background-color: ${({ color }) => color || COLORS.dividerColor};

  ${Spacing}
`;
export default Divider;
