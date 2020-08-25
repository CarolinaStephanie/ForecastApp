import React from 'react';
import { TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { Container, Content, Row, Wrapper, Col } from 'components/Layout';
import Header from 'components/Header';
import { H5, H4, H6 } from 'components/Label';

import { SPACING, COLORS, STRINGS } from 'config';

let MapView;

if (Platform.OS !== 'web') {
  MapView = require('react-native-maps').default;
}
const mapStyle = StyleSheet.create({
  map: {
    width: '100%',
    height: 200,
    marginTop: SPACING.huge,
    paddingLeft: 0,
  },
});

const CityDetails = ({ navigation }) => {
  const { data, isLoading, error } = useSelector(({ city }) => city);
  const { temp, temp_min, temp_max, pressure, humidity } = data?.main;
  const { lon, lat } = data?.coord;

  const blockItem = (title, description) => (
    <Row justifyContent="center">
      <Block>
        <Row paddingBottom={SPACING.small}>
          <H4 uppercase fontStyle="bold" letterSpacing={3} color={COLORS.black}>
            {title}
          </H4>
        </Row>
        <H5>{description}</H5>
      </Block>
    </Row>
  );

  return (
    <Container>
      <Header
        renderLeftIcon={() => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <H6 color={COLORS.primary}>{STRINGS.back}</H6>
          </TouchableOpacity>
        )}
        renderCenter={() => (
          <H6 uppercase fontStyle="medium" letterSpacing={3}>
            {`${data?.name || ''} ${STRINGS.cityTitle}`}
          </H6>
        )}
      />
      {error.data.message && (
        <Wrapper justifyContent="center" alignItems="center" paddingVertical={SPACING.huge}>
          <H6 uppercase fontStyle="medium" letterSpacing={3}>
            {error.data.message}
          </H6>
        </Wrapper>
      )}
      {!error.data?.message && data && (
        <Content paddingHorizontal={SPACING.large} isLoading={isLoading}>
          {blockItem(STRINGS.temperature, `${temp} °F`)}
          {blockItem(STRINGS.max, `${temp_max} °F`)}
          {blockItem(STRINGS.min, `${temp_min} °F`)}
          {blockItem(STRINGS.pressure, `${pressure} mb`)}
          {blockItem(STRINGS.humidity, `${humidity} %`)}
          <Row>
            <Block>
              <Col>
                <Row>
                  <H4 uppercase fontStyle="bold" letterSpacing={3} color={COLORS.black}>
                    {STRINGS.map}
                  </H4>
                </Row>
                <Row>
                  {Platform.OS !== 'web' ? (
                    <MapView
                      style={mapStyle.map}
                      loadingEnabled={true}
                      region={{
                        latitude: lat,
                        longitude: lon,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                    />
                  ) : (
                    <H6 uppercase fontStyle="medium" letterSpacing={3}>
                      {STRINGS.mapsUnavailability}
                    </H6>
                  )}
                </Row>
              </Col>
            </Block>
          </Row>
        </Content>
      )}
    </Container>
  );
};

const Block = styled.View`
  flex-direction: column;
  flex: 1;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-bottom-left-radius: 8px;
  padding-vertical: ${SPACING.large}px;
  padding-horizontal: ${SPACING.large}px;
  margin-vertical: ${SPACING.medium}px;
  box-shadow: 1px 1px 3px ${`${COLORS.darkBlue}70`};
  elevation: 5;
`;

export default CityDetails;
