import React, {Component} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../values/colors';
import MyStatusBar from '../components/MyStatusBar';
import HeaderView from '../components/HeaderView';
import Loader from './Loader';

export default class BaseView extends Component {
  state = {
    loader: false,
    isRefreshing: false,
  };

  showLoader = () => {
    this.setState({
      loader: true,
    });
  };

  hideLoader = () => {
    this.setState({
      loader: false,
    });
  };

  showRefreshing = () => {
    this.setState({
      isRefreshing: true,
    });
  };

  hideRefreshing = () => {
    this.setState({
      isRefreshing: false,
    });
  };

  render() {
    const {
      hasStatusBar,
      statusBarColor,
      headerParentStyle,
      hasHeader,
      parentStyle,
      children,
    } = this.props;
    const {loader} = this.state;

    return (
      <LinearGradient
        colors={colors.commonBgLinearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        <View style={[styles.safeAreaView, parentStyle]}>
          {hasStatusBar && (
            <MyStatusBar
              statusBarColor={statusBarColor ? statusBarColor : '#043B5D'}
            />
          )}
          {hasHeader && <HeaderView {...this.props} />}

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{flex: 1}}>
            {children}
          </KeyboardAvoidingView>

          <Loader loader={loader} />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
