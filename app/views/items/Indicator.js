// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {colors} from '../../values/colors';

// const Indicator = props => {
//   const {list, selectedIndex} = props;

//   const _renderItem = ({item, index}) => {
//     if (selectedIndex === index) {
//       return <View style={styles.selectedIndicator} />;
//     }

//     return <View style={styles.indicator} />;
//   };

//   return (
//     <View style={{height: 12, alignItems: 'center', margin: 24}}>
//       <FlatList
//         data={list}
//         renderItem={_renderItem}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default Indicator;

// const styles = StyleSheet.create({
//   selectedIndicator: {
//     height: 12,
//     width: 24,
//     backgroundColor: colors.accent,
//     borderRadius: 6,
//     marginRight: 16,
//   },
//   indicator: {
//     height: 12,
//     width: 12,
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     marginRight: 16,
//   },
// });
