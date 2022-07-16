import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import BaseView from '../../../hoc/BaseView';
import IconView from '../../../components/IconView';
import {
  getWetherData,
  setLocations,
} from '../../../../redux/actions/homeActions';
import LocationView from './LocationView';
import {useDispatch, useSelector} from 'react-redux';
import {generateRandomString} from '../../../../utils/Validations';
import Settings from './Settings';
import PagerView from 'react-native-pager-view';
// import Indicator from '../../../items/Indicator';

const Dashboard = props => {
  const baseViewRef = useRef(null);
  const pagerViewRef = useRef(null);

  const dispatch = useDispatch();

  const locations = useSelector(state => state.home.locations);

  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    _init();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _init = () => {
    if (baseViewRef !== null && locations.length < 1) {
      baseViewRef.current.showLoader();
      getWetherData('Kharar')
        .then(response => {
          baseViewRef.current.hideLoader();
          console.log('[Dashboard.js] weather detail : ', response);
          const data = {
            ...response,
            id: `city_${generateRandomString(24)}`,
          };
          dispatch(setLocations([...locations, data]));
        })
        .catch(error => {
          baseViewRef.current.hideLoader();
          console.log('[Dashboard.js] weather detail error: ', error);
        });
    }
  };

  return (
    <BaseView ref={baseViewRef} hasStatusBar statusBarColor={'transparent'}>
      <View style={styles.header}>
        <IconView
          name="add"
          type="ionicon"
          parentStyle={{position: 'absolute', left: 0, top: 0}}
          onPress={() => props.navigation.navigate('ManageCities')}
        />
        <IconView
          name="options"
          type="ionicon"
          parentStyle={{position: 'absolute', right: 0, top: 0}}
          onPress={() => setShowSettings(true)}
        />
      </View>
      {/* <View style={styles.parent}> */}

      {locations.length > 0 && (
        <PagerView
          style={styles.parent}
          initialPage={0}
          ref={pagerViewRef}
          showPageIndicator>
          {locations.map((item, index) => {
            return (
              <View key={index}>
                <LocationView detail={item} {...props} />
              </View>
            );
          })}
        </PagerView>
      )}

      {/* <Indicator list={locations} selectedIndex={pagerIndex}/> */}
      {/* </View> */}

      <Settings
        isVisible={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </BaseView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    marginBottom: 16,
    // backgroundColor: 'transparent',
  },
  header: {
    zIndex: 100,
  },
});
