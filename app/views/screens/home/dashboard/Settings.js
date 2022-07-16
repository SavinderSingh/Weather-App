import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BaseView from '../../../hoc/BaseView';
import {Overlay} from 'react-native-elements';
import {colors} from '../../../../values/colors';
import MyStatusBar from '../../../components/MyStatusBar';
import SettingItem from './items/SettingItem';
import IconView from '../../../components/IconView';
import * as Animatable from 'react-native-animatable';

const Settings = props => {
  const {isVisible, onClose} = props;

  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={onClose}
      overlayStyle={styles.parent}>
      <Animatable.View
        style={{flex: 1}}
        animation={'slideInRight'}
        duration={500}>
        <MyStatusBar statusBarColor={'transparent'} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.title}>Settings</Text>
          <IconView name={'close'} type={'antdesign'} onPress={onClose} />
        </View>

        <SettingItem
          title={'Temprature'}
          buttons={['°C', '°F']}
          containerStyle={{width: 96}}
        />

        <SettingItem
          title={'Wind Speed'}
          buttons={['m/s', 'km/h', 'mi/h']}
          containerStyle={{width: 144}}
        />

        <SettingItem
          title={'Pressure'}
          buttons={['hPa', 'inHg']}
          containerStyle={{width: 96}}
        />

        <SettingItem
          title={'Precipilation'}
          buttons={['mm', 'in']}
          containerStyle={{width: 96}}
        />

        <SettingItem
          title={'Distance'}
          buttons={['km', 'mi']}
          containerStyle={{width: 96}}
        />

        <SettingItem
          title={'Time Format'}
          buttons={['24', '12']}
          containerStyle={{width: 96}}
        />
      </Animatable.View>
    </Overlay>
  );
};

export default Settings;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    width: '70%',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
});
