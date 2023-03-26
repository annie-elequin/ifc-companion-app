import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function Scene({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>
          Back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '60%',

    alignItems: 'center',
    justifyContent: 'center',

    aspectRatio: 4,
    borderRadius: 15,
    backgroundColor: '#414141'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: scale(30),
    textAlign: 'center',
  },
});