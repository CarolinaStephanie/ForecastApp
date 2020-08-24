import styled from 'styled-components/native';
import { COLORS } from 'config/';

const GenericText = styled.Text`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  color: ${(props) => props.color || COLORS.defaultText};
  letterSpacing: ${(props) => props.letterSpacing || 0};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  text-align: ${(props) => props.textAlign || 'left'};
  ${({ margin }) => (margin ? `margin: ${margin}px;` : '')}
  ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : '')}
  ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : '')}
  ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft};` : '')}
  ${({ padding }) => (padding ? `padding: ${padding}px;` : '')}
  ${({ paddingHorizontal }) => (paddingHorizontal ? `padding-horizontal: ${paddingHorizontal}px;` : '')}
  ${({ paddingVertical }) => (paddingVertical ? `padding-vertical: ${paddingVertical};` : '')}
  ${({ paddingTop }) => (paddingTop ? `padding-top: ${paddingTop};` : '')};
  ${({ paddingLeft }) => (paddingLeft ? `padding-left: ${paddingLeft};` : '')};
  ${({ paddingRight }) => (paddingRight ? `padding-right: ${paddingRight};` : '')};
  border-bottom-width: ${(props) => props.borderBottomWidth || 0};
  border-bottom-color: ${(props) => props.borderBottomColor || 0};
  min-height: ${(props) => props.minHeight || 0};
  ${({ uppercase, lowercase, capitalize }) =>
    (uppercase && 'text-transform: uppercase;') ||
    (lowercase && 'text-transform: lowercase;') ||
    (capitalize && 'text-transform: capitalize;') ||
    ''}
`;

export const H1 = styled(GenericText).attrs((props) => ({
  fontStyle: props.fontStyle || 'semiBold',
}))`
  font-size: 28px;
`;
export const H2 = styled(GenericText).attrs((props) => ({
  fontStyle: props.fontStyle || 'semiBold',
}))`
  font-size: 23px;
`;
export const H3 = styled(GenericText).attrs((props) => ({
  fontStyle: props.fontStyle || 'semiBold',
}))`
  font-size: 19px;
`;
export const H4 = styled(GenericText).attrs((props) => ({
  fontStyle: props.fontStyle || 'semiBold',
}))`
  font-size: 18px;
`;
export const H5 = styled(GenericText).attrs((props) => ({
  fontStyle: props.fontStyle || 'semiBold',
}))`
  font-size: 15px;
`;
export const H6 = styled(GenericText).attrs((props) => ({
  fontStyle: props.fontStyle || 'semiBold',
}))`
  font-size: 13px;
`;
