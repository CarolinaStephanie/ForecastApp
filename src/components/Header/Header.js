import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { COLORS, SPACING } from 'config';

const Header = ({ renderCenter, renderLeftIcon, renderRightIcon }) => (
  <Container>
    <Float>{renderCenter()}</Float>
    <Wrapper>{renderLeftIcon()}</Wrapper>
    <Wrapper>{renderRightIcon()}</Wrapper>
  </Container>
);

const Wrapper = styled.View`
  flex-direction: row;
  padding-horizontal: ${SPACING.default}px;
`;

const Container = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.white};
  overflow: visible;
`;

const Float = styled.View`
  flex-direction: row;
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

Header.defaultProps = {
  renderLeftIcon: () => <></>,
  renderRightIcon: () => <></>,
  renderCenter: () => <></>,
};

Header.propTypes = {
  renderLeftIcon: PropTypes.func,
  renderRightIcon: PropTypes.func,
  renderCenter: PropTypes.func,
};

export default Header;
