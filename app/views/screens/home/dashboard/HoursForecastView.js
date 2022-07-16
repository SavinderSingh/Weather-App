import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import moment from 'moment';

const HoursForecastView = props => {
  const {list} = props;

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.itemView}>
        <Text style={styles.time}>{moment(item.time).format('LT')}</Text>
        <Image
          source={{uri: `https:${item.condition.icon}`}}
          style={{height: 36, width: 36}}
        />
        <Text style={styles.weather} numberOfLines={1} ellipsizeMode={'tail'}>
          {item.temp_c}°c
        </Text>
        <Icon name="wind" type="feather" color={'#fff'} size={16} />
        <Text style={styles.wind}>{item.wind_kph} km/h</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={list}
      renderItem={_renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight: 16}}
      style={{marginTop: 16, paddingLeft: 16}}
    />
  );
};

export default HoursForecastView;

const styles = StyleSheet.create({
  itemView: {
    width: 64,
    alignItems: 'center',
  },
  time: {
    fontSize: 10,
    color: '#fff',
  },
  weather: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  wind: {
    fontSize: 10,
    color: '#fff',
  },
});
