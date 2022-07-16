import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {Fragment, useRef} from 'react';
import BaseView from '../../../hoc/BaseView';
import {images} from '../../../../assets/images';
import {colors} from '../../../../values/colors';
import IconView from '../../../components/IconView';
import WindView from './WindView';
import HoursForecastView from './HoursForecastView';
import Upcoming2DaysForecast from './Upcoming2DaysForecast';
import ButtonView from '../../../components/ButtonView';

const LocationView = props => {
  const {detail} = props;

  const location = detail.location;
  const current = detail.current;
  const hoursForecast = detail.forecast.forecastday[0].hour;

  const baseViewRef = useRef(null);

  return (
    <BaseView ref={baseViewRef}>
      <ScrollView>
        <View style={styles.topView}>
          <Text style={styles.name}>{location.name}</Text>
          <Image
            source={{uri: `https:${current.condition.icon}`}}
            style={styles.weatherIcon}
          />
          <Text style={styles.condition}>{current.condition.text}</Text>
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <Text style={styles.temp}>{current.temp_c}</Text>
            <Text style={[styles.temp, {fontSize: 24}]}>°c</Text>
          </View>
          <Text style={[styles.condition, {color: '#e0e0e0'}]}>
            Feels like 36°C
          </Text>
        </View>

        <HoursForecastView list={hoursForecast} />

        <Upcoming2DaysForecast forecast={detail.forecast} />

        <WindView current={current} />
      </ScrollView>
      <ButtonView
        title={'5-days forecast'}
        containerStyle={{margin: 24, backgroundColor: 'transparent'}}
        onPress={() =>
          props.navigation.navigate('FutureForecast', {detail: detail})
        }
      />
    </BaseView>
  );
};

export default LocationView;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  topView: {
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 24,
  },
  weatherIcon: {
    height: 72,
    width: 72,
  },
  condition: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
  temp: {
    fontSize: 64,
    fontWeight: '700',
    color: '#fff',
  },
});
