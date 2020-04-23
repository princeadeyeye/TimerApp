import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TimerButton from './TimerButton';

export default function Timer({ title, project, elapsed }) {
  const { timerContainer, titleStyle, elapsedTime, buttonGroup} = styles
        return (
            <View style={timerContainer}>
                <Text style={titleStyle}>{title}</Text>
                <Text>{project}</Text>
                <Text style={elapsedTime}>{elapsed}</Text>
                <View style={buttonGroup}>
                    <TimerButton color='blue' small title="Edit" />
                    <TimerButton color='blue' small title="Remove" />
                </View>
                <TimerButton color="#21BA45" title="Start" />
            </View>
        )
    }

const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: "white",
        borderColor: "#d6d7da",
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    elapsedTime: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 15,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between"    
    }
})