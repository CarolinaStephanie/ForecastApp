import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components/native';

import { Container, Content, Row, Col, Wrapper } from 'components/Layout';
import Header from 'components/Header';
import { H6, H4, H2 } from 'components/Label';

import { getCityForecast } from 'store/City/CityUseCases';
import { updateHistory } from 'store/HistoryList/HistoryUseCases';

import { SPACING, COLORS, STRINGS } from 'config';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(({ city }) => city);
  const { data } = useSelector(({ historyList }) => historyList);
  const validatorSchema = yup.object().shape({
    city: yup.string().required(),
  });

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      city: '',
    },
    resolver: yupResolver(validatorSchema),
  });
  const onSumbit = ({ city }) => {
    dispatch(getCityForecast(city));
    navigation.navigate('CityDetails');
    dispatch(updateHistory(city));
  };

  return (
    <Container>
      <Header
        renderCenter={() => (
          <H6 uppercase fontStyle="medium" letterSpacing={3}>
            {STRINGS.homeTitle}
          </H6>
        )}
      />
      <Col padding={SPACING.medium}>
        <Row>
          <Controller
            name="city"
            control={control}
            render={({ onChange, value, onBlur }) => (
              <StyledTextInput placeholder={STRINGS.citySearch} onChangeText={onChange} value={value} onBlur={onBlur} />
            )}
          />
        </Row>
      </Col>

      <Content padding={SPACING.medium} isLoading={isLoading}>
        <Wrapper justifyContent="center" alignItems="center" paddingVertical={SPACING.default}>
          <Col>
            <H2 uppercase fontStyle="Bold" letterSpacing={3}>
              {STRINGS.historyList}
            </H2>
          </Col>
        </Wrapper>
        {data.map((name) => (
          <ItemList>
            <Row>
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
              <TouchableOpacity onPress={() => dispatch(updateHistory(name, true))}>
                <Col flex={1}>
                  <H4 color={COLORS.red}>{STRINGS.remove}</H4>
                </Col>
              </TouchableOpacity>
            </Row>
          </ItemList>
        ))}
      </Content>
      <StyledButton onPress={handleSubmit(onSumbit)}>
        <H6 uppercase fontStyle="medium" color={COLORS.white}>
          {STRINGS.search}
        </H6>
      </StyledButton>
    </Container>
  );
};

const StyledTextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  max-height: 40px;
  border-bottom-width: 1px;
`;

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

const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 75%;
  height: 40px;
  border-radius: 5px;
  background-color: ${COLORS.primary};
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: ${SPACING.medium}px;
  margin-bottom: ${SPACING.huge}px;
  ${({ disabled }) => disabled && 'opacity: 0.5'}
`;

export default Home;
