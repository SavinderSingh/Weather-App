import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BaseView from '../../hoc/BaseView';
import {images} from '../../../assets/images';
import {colors} from '../../../values/colors';

const Splash = props => {
  useEffect(() => {
    _init();
    return () => {};
  });

  const _init = () =>
    setTimeout(() => {
      props.navigation.replace('Dashboard');
    }, 1000);

  return (
    <BaseView>
      <View style={styles.parent}>
        <Image style={styles.logo} source={images.logo} resizeMode="contain" />
      </View>
    </BaseView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.splashBg,
  },
  logo: {
    height: 120,
    width: 120,
  },
});
