import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const CityItem = props => {
  const {item, index, onRemove} = props;
  return (
    <View style={styles.parent}>
      <View style={styles.row}>
        <Text style={styles.name}>{item.location.name}</Text>
        {index !== 0 && (
          <TouchableOpacity onPress={onRemove}>
            <Icon name={'minus-circle'} type={'feather'} color={'#f33'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.row}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: `https:${item.current.condition.icon}`}}
            style={styles.image}
          />
          <Text style={styles.day}>{item.current.condition.text}</Text>
        </View>
        <Text style={styles.day}>{item.current.temp_c}°</Text>
      </View>
    </View>
  );
};

export default CityItem;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#00000040',
    marginTop: 24,
    marginHorizontal: 16,
    padding: 24,
    borderRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 36,
    width: 36,
  },
  day: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
});
