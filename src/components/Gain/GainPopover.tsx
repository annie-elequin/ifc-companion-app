import React from "react";
import { View as RNView, Pressable as RNPressable, Text as RNText} from 'react-native'

export default function GainPopover({increase, decrease}) {
  const pressableStyle = ({pressed}) => {
    return {
      backgroundColor: '#7F5CFF', flex: 1, justifyContent: 'center', alignItems: 'center', opacity: pressed ? .5 : 1
    }
  }

  return (
    <RNView style={{ width: 80, height: 120, backgroundColor: '#00000080', borderWidth: 3, borderColor: '#7F5CFF',  marginLeft: 20, padding: 8 }}>
      <RNPressable style={pressableStyle} onPress={increase}>
        <RNText style={{ color: 'white', fontSize: 40, fontWeight: 'bold' , textAlign: 'center', marginBottom: 4 }}>+</RNText>
      </RNPressable>
      <RNView style={{ height: 8 }} />
      <RNPressable style={pressableStyle} onPress={decrease}>
        <RNText style={{ color: 'white', fontSize: 40, fontWeight: 'bold' , textAlign: 'center', marginBottom: 4 }}>-</RNText>
      </RNPressable>
    </RNView>
  )
}