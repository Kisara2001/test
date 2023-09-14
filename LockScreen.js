// import React, { useState } from 'react';
// import { View, Text, Alert, Button } from 'react-native';
// import Keypad from './Keypad';

// export default function LockScreen() {
//   const [pin, setPin] = useState('');
//   const correctPin = '1234';
//   const maxAttempts = 3;
//   const [attempts, setAttempts] = useState(maxAttempts);

//   const handleKeypadPress = (value) => {
//     if (pin.length < 4) {
//       setPin(pin + value);
//     }
//   };

//   const handleDeletePress = () => {
//     if (pin.length > 0) {
//       setPin(pin.slice(0, -1));
//     }
//   };

//   const handleUnlock = () => {
//     if (pin === correctPin) {
//       Alert.alert('Unlocked', 'The lock is now open!', [{ text: 'OK', onPress: resetLock }]);
//     } else {
//       const remainingAttempts = attempts - 1;
//       setAttempts(remainingAttempts);

//       if (remainingAttempts === 0) {
//         lockForMinute();
//       } else {
//         Alert.alert('Incorrect PIN', `You have ${remainingAttempts} attempts left.`);
//         setPin('');
//       }
//     }
//   };

//   const lockForMinute = () => {
//     Alert.alert('Locked', 'The keypad is locked for 1 minute.', [{ text: 'OK', onPress: resetLock }]);
//   };

//   const resetLock = () => {
//     setPin('');
//     setAttempts(maxAttempts);
//   };

//   return (

//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
//     <Text style={{ color: '#5A7FD6', fontSize: 34 ,marginTop: 100}}>Enter Passcode</Text>
//     <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
//       {/* Display PIN circles based on the length of the PIN */}
//       {Array.from({ length: 4 }).map((_, index) => (
//         <View key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: index < pin.length ? '#E15646' : 'white', margin: 5, borderColor: '#5A7FD6', borderWidth: 2 }}></View>
//       ))}
//     </View>
//     <Keypad
//       onPress={handleKeypadPress}
//       onDelete={handleDeletePress}
//       onUnlock={handleUnlock}
//     />
//   </View>
  


//   );
// }

import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import Keypad from './Keypad';

export default function LockScreen() {
  const [pin, setPin] = useState('');
  const correctPin = '1234';
  const maxAttempts = 3;
  const [attempts, setAttempts] = useState(maxAttempts);
  const [locked, setLocked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    let interval;

    if (locked) {
      interval = setInterval(() => {
        if (remainingTime === 0) {
          clearInterval(interval);
          setLocked(false);
          setAttempts(maxAttempts);
        } else {
          setRemainingTime(remainingTime - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [locked, remainingTime]);

  const handleKeypadPress = (value) => {
    if (!locked && pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleDeletePress = () => {
    if (!locked && pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleUnlock = () => {
    if (pin === correctPin) {
      Alert.alert('Unlocked', 'The lock is now open!', [{ text: 'OK', onPress: resetLock }]);
    } else {
      const remainingAttempts = attempts - 1;
      setAttempts(remainingAttempts);

      if (remainingAttempts === 0) {
        lockForMinute();
      } else {
        Alert.alert('Incorrect PIN', `You have ${remainingAttempts} attempts left.`);
        setPin('');
      }
    }
  };

  const lockForMinute = () => {
    setLocked(true);
    setRemainingTime(60);
    setPin('');
  };

  const resetLock = () => {
    setPin('');
    setAttempts(maxAttempts);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#5A7FD6', fontSize: 34, marginTop: 100 }}>Enter Passcode</Text>
      
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Display PIN circles based on the length of the PIN */}
        {Array.from({ length: 4 }).map((_, index) => (
          <View key={index} style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: index < pin.length ? '#5A7FD6' : 'white', margin: 5, borderColor: '#5A7FD6', borderWidth: 2 }}></View>
        ))}
      </View>
      <Text style={{ color: 'red', fontSize: 15 }}>{locked ? `Locked for ${remainingTime} seconds` : ''}</Text>
      <Keypad
        onPress={handleKeypadPress}
        onDelete={handleDeletePress}
        onUnlock={handleUnlock}
      />
    </View>
  );
}

