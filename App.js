// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Login from './component/login';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Login/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// Navigation.js
// App.js
//////////////////
// import React from 'react';
// import Navigation from './Navigation';

// export default function App() {
//   return <Navigation />;
// }
////////////////////////////
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LockScreen from './LockScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LockScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

