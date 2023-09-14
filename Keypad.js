
import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';

export default function Keypad({ onPress, onDelete, onUnlock }) {
  const keypadValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const columns = 3;
  const { width } = Dimensions.get('window');
  0
  const columnWidth = (width - 40) / columns;
  const buttonWidth = (width - 150) / columns

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {keypadValues.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => onPress(value)}
            style={{
              width: columnWidth,
              height: columnWidth,
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: columnWidth / 2,
                width: columnWidth * 0.6,
                height: columnWidth * 0.6,
                backgroundColor: '#FAFAFA',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#5A7FD6',
                borderWidth: 2,
              }}>
              <Text style={{ color: '#5A7FD6', fontSize: 24 }}>{value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: columnWidth * 3, marginTop: 10 }}>
      <TouchableOpacity onPress={onUnlock}>
          <View
            style={{
              width: buttonWidth,
              height: buttonWidth,
              borderRadius: columnWidth / 2,
              backgroundColor: '#5A7FD6',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 24 }}>Unlock</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <View
            style={{
              width: buttonWidth,
              height: buttonWidth,
              borderRadius: columnWidth / 2,
              backgroundColor: '#E15646',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 24 }}>Delete</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

