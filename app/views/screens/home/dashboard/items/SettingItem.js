import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ButtonGroup} from 'react-native-elements';
import {colors} from '../../../../../values/colors';

const SettingItem = props => {
  const {title, buttons, containerStyle} = props;

  const [index, setIndex] = useState(0);

  return (
    <View style={{marginTop: 32}}>
      <Text style={styles.title}>{title}</Text>
      <ButtonGroup
        buttons={buttons}
        selectedIndex={index}
        containerStyle={[styles.containerStyle, containerStyle]}
        selectedButtonStyle={styles.selectedButtonStyle}
        buttonStyle={styles.buttonStyle}
        selectedTextStyle={styles.selectedTextStyle}
        textStyle={styles.textStyle}
        innerBorderStyle={styles.innerBorderStyle}
        onPress={index => setIndex(index)}
      />
    </View>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
    paddingLeft: 8,
  },
  containerStyle: {
    borderColor: colors.accent,
    borderWidth: 2,
    height: 24,
    borderRadius: 4,
    // width:120
  },
  selectedButtonStyle: {
    backgroundColor: colors.accent,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
  },
  selectedTextStyle: {
    color: colors.primary,
  },
  textStyle: {
    color: '#e0e0e0',
  },
  innerBorderStyle: {
    color: colors.accent,
  },
});
