import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TimerButton({ color, title, small, onPress}) {
    const {button, buttonText, smallText, largeText } = styles
    return (
      <TouchableOpacity
      style={[button, {borderColor: color}]}
      onPress={onPress}
      >
        <Text 
            style = { [buttonText, small ? smallText : largeText, { color }] }
        >
            {title}
        </Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        minWidth: 100,
        borderWidth: 2,
        borderRadius: 3
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'   
    }, 
    smallText: {
        fontSize: 14,
        padding: 5,
    },
    largeText: {
        fontSize: 16,
        padding: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    }
})
