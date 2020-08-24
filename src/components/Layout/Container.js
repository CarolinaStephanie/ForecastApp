import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import COLORS from 'config/colors';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ color }) => color || COLORS.white};
`;

const Container = ({ children, background }) => (
  <Wrapper color={background}>
    <SafeAreaView />
    {children}
  </Wrapper>
);

export default Container;
