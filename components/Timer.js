import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TimerButton from './TimerButton';
import  { secondsToHms } from './utils/TimerUtils'

export default class Timer extends Component {
    handleRemovePress = () => {
        const { id, onRemovePress } = this.props
        onRemovePress(id)
    }

    handleStartPress = () => {
        const { id, onStartPress } = this.props
        onStartPress(id)
    }

    handleStopPress = () => {
        const { id, onStopPress } = this.props
        onStopPress(id)
    }
    renderActionButton () {
        const { isRunning } = this.props

        if(isRunning) {
            return (
                <TimerButton
                    color="#DB2828"
                    title="Stop"
                    onPress={this.handleStopPress} 
                />
            )
        }
        return (
            <TimerButton 
            color="#21BA45"
            title="Start"
            onPress={this.handleStartPress} 
            />
        )
    }
    render() {
        const { timerContainer, titleStyle, elapsedTime, buttonGroup} = styles
        const { title, project, elapsed, onEditPress } = this.props

        return (
                  <View style={timerContainer}>
                      <Text style={titleStyle}>{title}</Text>
                      <Text>{project}</Text>
                      <Text style={elapsedTime}>{secondsToHms(elapsed)}</Text>
                      <View style={buttonGroup}>
                          <TimerButton color='blue' small title="Edit" onPress={onEditPress} />
                          <TimerButton color='blue' small title="Remove" onPress={this.handleRemovePress} />
                      </View>
                      {this.renderActionButton()}
                  </View>
              )
          }
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