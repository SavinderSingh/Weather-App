import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';

const Upcoming2DaysForecast = props => {
  const {forecast} = props;

  const list = forecast.forecastday.slice(1, 3);

  return (
    <View style={styles.parent}>
      {list.map(item => {
        return <ItemView item={item} />;
      })}
    </View>
  );
};

export default Upcoming2DaysForecast;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#00000033',
    paddingBottom: 24,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  image: {
    height: 28,
    width: 28,
  },
  day: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginLeft: 8,
  },
});

const ItemView = props => {
  const {item, index} = props;
  return (
    <View style={styles.row}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: `https:${item.day.condition.icon}`}}
          style={styles.image}
        />
        <Text style={styles.day}>
          {moment(item.date).format('dddd')} - {item.day.condition.text}
        </Text>
      </View>
      <Text style={styles.day}>
        {item.day.maxtemp_c}° / {item.day.mintemp_c}°
      </Text>
    </View>
  );
};
