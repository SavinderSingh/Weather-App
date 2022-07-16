import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useRef, useState} from 'react';
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
import CityItem from './items/CityItem';
import {generateRandomString} from '../../../../utils/Validations';

const ManageCities = props => {
  const baseViewRef = useRef(null);

  const dispatch = useDispatch();

  const locations = useSelector(state => state.home.locations);

  const [city, setCity] = useState('');
  const [extraData, setExtraData] = useState(false);

  const _onAddCity = () => {
    if (city.length > 0) {
      if (baseViewRef !== null) {
        baseViewRef.current.showLoader();
        getWetherData(city)
          .then(response => {
            baseViewRef.current.hideLoader();
            const data = {
              ...response,
              id: `city_${generateRandomString(24)}`,
            };
            console.log('[Dashboard.js] weather detail : ', response, data);
            dispatch(setLocations([...locations, data]));
            setCity('');
          })
          .catch(error => {
            baseViewRef.current.hideLoader();
            console.log('[Dashboard.js] weather detail error: ', error);
          });
      }
    } else {
      showAlert('error', 'Please enter city name');
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <CityItem item={item} index={index} onRemove={() => _onRemove(item)} />
    );
  };

  const _onRemove = item => {
    showConfirmAlert(
      'Remove',
      `Are you sure you want to remove "${item.location.name}"?`,
      () => {
        const filteredList = locations.filter(it => it.id !== item.id);
        console.log('[ManageCities.js] : ', filteredList);
        dispatch(setLocations(filteredList));
        setExtraData(prevState => !prevState);
      },
    );
  };
  return (
    <BaseView
      ref={baseViewRef}
      hasStatusBar
      statusBarColor={'transparent'}
      hasHeader
      hasBack
      onBackPress={() => props.navigation.goBack()}
      title={'Manage Cities'}>
      <View style={styles.searchView}>
        <TextInput
          placeholder="Enter city name"
          placeholderTextColor={'#e0e0e0'}
          value={city}
          onChangeText={text => setCity(text)}
          style={styles.textInput}
        />
        <TouchableOpacity style={{padding: 24}} onPress={() => _onAddCity()}>
          <Icon
            name="add"
            type="ionicon"
            color={colors.buttonColor}
            size={24}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={locations}
        renderItem={_renderItem}
        extraData={extraData}
      />
    </BaseView>
  );
};

export default ManageCities;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.splashBg,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    backgroundColor: '#00000040',
    // paddingVertical:24,
    borderRadius: 4,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 24,
    paddingVertical: 24,
    color: '#fff',
  },
});
