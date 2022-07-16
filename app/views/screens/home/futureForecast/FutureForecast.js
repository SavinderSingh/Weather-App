import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useEffect, useRef, useState} from 'react';
import BaseView from '../../../hoc/BaseView';
import {images} from '../../../../assets/images';
import {colors} from '../../../../values/colors';
import IconView from '../../../components/IconView';
import {useDispatch, useSelector} from 'react-redux';
import {
  getWetherData,
  setLocations,
} from '../../../../redux/actions/homeActions';
import {showAlert, showConfirmAlert} from '../../../../utils/Message';
import {Icon} from 'react-native-elements';
import ForecastItem from './items/ForecastItem';
import {generateRandomString} from '../../../../utils/Validations';

const FutureForecast = props => {
  const baseViewRef = useRef(null);

  const dispatch = useDispatch();

  //   const locations = useSelector(state => state.home.locations);

  const [detail, setDetail] = useState(null);
  const [extraData, setExtraData] = useState(false)

  useEffect(() => {
    _getForecast();
    return () => {};
  }, []);

  const _getForecast = () => {
    const {detail} = props.route.params;
    setDetail(detail);
  };

  const _renderItem = ({item, index}) => {
    return <ForecastItem item={item} index={index} />;
  };

  return (
    <BaseView
      ref={baseViewRef}
      hasStatusBar
      statusBarColor={'transparent'}
      hasHeader
      hasBack
      onBackPress={() => props.navigation.goBack()}
      title={detail !== null ? detail.location.name : ''}>
      {detail !== null && (
        <Fragment>
          <Text style={styles.title}>
            {detail.forecast.forecastday.length}-Day forecast
          </Text>
          <FlatList
            data={detail.forecast.forecastday}
            renderItem={_renderItem}
            extraData={extraData}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft:16}}
            contentContainerStyle={{paddingRight:16}}
          />
        </Fragment>
      )}
    </BaseView>
  );
};

export default FutureForecast;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.splashBg,
  },

  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
