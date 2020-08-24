import styled from 'styled-components/native';

const Wrapper = styled.View`
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  
  ${({ flex }) => (flex ? `flex: ${flex};` : '')}
  ${({ flex, flexWrap }) => (flex ? `flex-wrap: ${flexWrap || 'wrap'};` : '')}

  ${({ paddingHorizontal }) => (paddingHorizontal ? `padding-horizontal: ${paddingHorizontal}px;` : '')}
  ${({ paddingVertical }) => (paddingVertical ? `padding-vertical: ${paddingVertical}px;` : '')}
  
  ${({ background }) => (background ? `background-color: ${background};` : '')}
  
  ${({ margin }) => (margin ? `margin: ${margin}px;` : '')}
  ${({ marginTop }) => (marginTop ? `margin-bottom: ${marginTop};` : '')}
  ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : '')}
  
  ${({ padding }) => (padding ? `padding: ${padding}px;` : '')}
  
  ${({ height }) => (height ? `height: ${height}px;` : '')}
  ${({ width }) => (width ? `width: ${width}px;` : '')}
`;

export default Wrapper;
