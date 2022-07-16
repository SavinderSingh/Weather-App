import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {colors} from '../../../../../values/colors';
import {Icon} from 'react-native-elements';

const ForecastItem = props => {
  const {item, index} = props;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.parent}>
        <Text style={styles.day}>{moment(item.date).format('ddd')}</Text>
        <Image
          source={{uri: `https:${item.day.condition.icon}`}}
          style={styles.weatherIcon}
        />
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:24}}> */}
        <Text style={styles.text} numberOfLines={1}>
          {item.day.condition.text}
        </Text>
        {/* </ScrollView> */}

        <Text style={styles.temp}>{parseInt(item.day.maxtemp_c)}°</Text>
        <Text style={styles.tempTime}>Day</Text>

        <Text style={styles.temp}>{parseInt(item.day.mintemp_c)}°</Text>
        <Text style={styles.tempTime}>Night</Text>

        <Icon
          name="wind"
          type="feather"
          color={'#fff'}
          size={28}
          style={{marginTop: 24}}
        />
        <Text style={styles.tempTime}>{item.day.maxwind_kph} km/h</Text>

        <Text style={styles.temp}>{item.day.uv}</Text>
        <Text style={styles.tempTime}>UV Index</Text>

        <Text style={styles.temp}>{item.day.avghumidity}%</Text>
        <Text style={styles.tempTime}>Humidity</Text>

        <Icon
          name="sunrise"
          type="feather"
          color={'#fff'}
          size={28}
          style={{marginTop: 24}}
        />
        <Text style={styles.tempTime}>{item.astro.sunrise}</Text>

        <Icon
          name="sunset"
          type="feather"
          color={'#fff'}
          size={28}
          style={{marginTop: 24}}
        />
        <Text style={styles.tempTime}>{item.astro.sunset}</Text>
      </View>
    </ScrollView>
  );
};

export default ForecastItem;

const styles = StyleSheet.create({
  parent: {
    width: 72,
    flex: 1,
    backgroundColor: colors.primary,
    marginRight: 16,
    alignItems: 'center',
    paddingBottom: 24,
  },
  day: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 24,
  },
  weatherIcon: {
    height: 48,
    width: 48,
    marginTop: 24,
  },
  text: {
    fontSize: 10,
    color: '#fff',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  temp: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginTop: 24,
  },
  tempTime: {
    fontSize: 10,
    color: '#fff',
    marginTop: 4,
  },
});
