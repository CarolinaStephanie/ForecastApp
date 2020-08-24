const Spacing = `
  ${({ margin }) => `margin: ${margin}px` || ''};
  ${({ marginTop }) => `margin-top: ${marginTop}px` || ''};
  ${({ marginBottom }) => `margin-bottom: ${marginBottom}px` || ''};
  ${({ marginRight }) => `margin-right: ${marginRight}px` || ''};
  ${({ marginLeft }) => `margin-right: ${marginLeft}px` || ''};

  ${({ marginHorizontal }) => `margin-horizontal: ${marginHorizontal}px` || ''};
  ${({ marginVertical }) => `margin-vertical: ${marginVertical}px` || ''};
  
  ${({ padding }) => `padding: ${padding}px` || ''};
  ${({ paddingHorizontal }) => `padding-horizontal: ${paddingHorizontal}px` || ''};
  ${({ paddingVertical }) => `padding-vertical: ${paddingVertical}px` || ''};
  
  ${({ height }) => `height: ${height}` || ''};
  ${({ width }) => `width: ${width}` || ''};
  
  ${({ flex }) => `flex: ${flex}` || ''};
`;

export default Spacing;
