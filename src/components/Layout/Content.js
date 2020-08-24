import React, { forwardRef } from 'react';
import styled from 'styled-components/native';

import COLORS from 'config/colors';

const Loading = styled.ActivityIndicator.attrs({
  color: COLORS.primary,
})`
  align-self: center;
`;

const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  ${({ padding }) => (padding ? `${padding}px;` : '')};
  ${({ paddingBottom }) => (paddingBottom ? `padding-bottom: ${paddingBottom}px;` : '')};
  ${({ paddingHorizontal }) => (paddingHorizontal ? `padding-horizontal: ${paddingHorizontal}px;` : '')};
`;

const Content = ({ isLoading, children, padding, paddingHorizontal, paddingBottom }, ref) => {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper ref={ref} padding={padding} paddingBottom={paddingBottom} paddingHorizontal={paddingHorizontal}>
      {children}
    </Wrapper>
  );
};

export default forwardRef(Content);
