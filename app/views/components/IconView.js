import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

const IconView = props => {

  const {parentStyle, iconViewStyle, onPress} = props;

  return (
    <TouchableOpacity style={[styles.parent, parentStyle]} activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.iconView, iconViewStyle]}>
        <Icon {...props} size={24} color={'#fff'}/>
      </View>
    </TouchableOpacity>
  );
};

export default IconView;

const styles = StyleSheet.create({
  parent: {
    margin: 12,
  },
  iconView: {
    height: 40,
    width: 40,
    backgroundColor: '#ffffff33',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20
  },
});
