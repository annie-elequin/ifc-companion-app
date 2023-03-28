import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('DemoOneScene')}>
        <Text style={styles.buttonText}>
          Demo 1
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('DemoTwoScene')}>
        <Text style={styles.buttonText}>
          Demo 2
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