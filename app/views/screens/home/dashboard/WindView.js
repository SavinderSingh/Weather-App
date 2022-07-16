import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WindView = props => {
  const {current} = props;

  return (
    <View style={styles.parent}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>Wind</Text>
          <Text style={styles.value}>{current.wind_kph} km/h</Text>
        </View>
        <View>
          <Text style={[styles.title, {textAlign: 'right'}]}>Humidity</Text>
          <Text style={[styles.value, {textAlign: 'right'}]}>
            {current.humidity}%
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>UV Index</Text>
          <Text style={styles.value}>{current.uv}</Text>
        </View>
        <View>
          <Text style={[styles.title, {textAlign: 'right'}]}>Visibility</Text>
          <Text style={[styles.value, {textAlign: 'right'}]}>
            {current.vis_km} km
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WindView;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#00000033',
    paddingBottom: 16,
    paddingHorizontal: 16,
    margin: 16,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    color: '#fff',
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
