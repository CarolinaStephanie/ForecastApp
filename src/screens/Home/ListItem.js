import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Row, Col } from 'components/Layout';
import { H4 } from 'components/Label';

import { getCityForecast } from 'store/City/CityUseCases';
import { updateHomeList } from 'store/HomeList/HomeUseCases';

import { SPACING, COLORS, STRINGS } from 'config';

const ListItem = ({ name, isFavoriteItem }) => {
  const { historyList, favoriteList } = useSelector(({ homeList }) => homeList);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const options = {
    list: isFavoriteItem ? favoriteList : historyList,
    actionName: isFavoriteItem ? 'updateFavorite' : 'updateHistory',
  };
  return (
    <ItemList>
      <Row justifyContent="space-between" alignItems="center">
        <Col flex={1}>
          <TouchableOpacity
            onPress={() => {
              dispatch(getCityForecast(name));
              navigation.navigate('CityDetails');
            }}
          >
            <H4>{name}</H4>
          </TouchableOpacity>
        </Col>
        <Col>
          {!isFavoriteItem && (
            <TouchableOpacity onPress={() => dispatch(updateHomeList(name, false, favoriteList, 'updateFavorite'))}>
              <Col flex={1}>
                <H4 color={COLORS.primary}>{STRINGS.addFavorite}</H4>
              </Col>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => dispatch(updateHomeList(name, true, options.list, options.actionName))}>
            <Col flex={1}>
              <H4 color={COLORS.red}>{STRINGS.remove}</H4>
            </Col>
          </TouchableOpacity>
        </Col>
      </Row>
    </ItemList>
  );
};

const ItemList = styled.View`
  flex-direction: column;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-bottom-left-radius: 8px;
  padding-vertical: ${SPACING.large}px;
  padding-horizontal: ${SPACING.large}px;
  margin-vertical: ${SPACING.medium}px;
  box-shadow: 1px 1px 3px ${`${COLORS.black}70`};
  elevation: 5;
`;

export default ListItem;
