import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {colors} from '../../values/colors';

const ButtonView = props => {
  const {
    title,
    containerStyle,
    buttonStyle,
    titleStyle,
    onPress,
    iconRight,
    iconLeft,
    outline,
    size,
  } = props;

  const bgColor = outline ? '#fff' : colors.buttonColor;
  const textColor = outline ? colors.buttonColor : '#fff';

  let height = 48;
  let fontSize = 16;

  if (size === 'small') {
    height = 28;
    fontSize = 12;
  } else if (size === 'medium') {
    height = 36;
    fontSize = 14;
  }

  return (
    <Button
      title={title}
      titleStyle={[
        styles.titleStyle,
        {color: textColor, fontSize: fontSize},
        titleStyle,
      ]}
      containerStyle={[styles.containerStyle, {height: height}, containerStyle]}
      buttonStyle={[
        styles.buttonStyle,
        {backgroundColor: bgColor, height: height},
        buttonStyle,
      ]}
      onPress={onPress}
      iconRight={iconRight}
      iconLeft={iconRight}
      icon={props.icon}
      disabled={props.disabled}
      disabledStyle={[{borderColor: '#888'}, props.disabledStyle]}
      disabledTitleStyle={[{color: '#888'}, props.disabledTitleStyle]}
    />
  );
};

export default ButtonView;

const styles = StyleSheet.create({
  containerStyle: {
    // height:48,
    // borderRadius:24
    // marginTop:20,
    // alignItems:'center',
    // justifyContent : 'center',
    backgroundColor:'transparent'
  },
  buttonStyle: {
    // height:48,
    borderRadius: 24,
    backgroundColor: colors.buttonColor,
    // borderWidth: 1,
    // borderColor: colors.borderColor,
    padding: 0,
    // alignSelf:'center'
    justifyContent: 'center',
  },
  titleStyle: {
    // fontFamily: fonts.notoSans600,
    fontSize: 16,
    fontWeight: '700',
    // textAlign:'center',
    // paddingRight:24,
    // alignSelf:'center'
  },
});
