import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import TimerButton from './TimerButton'
import TimerForm from './TimerForm'

export default class ToggleableTimerForm  extends Component{
    state = {
        isOpen: false
    }
    handleFormOpen = () => {
        this.setState({ isOpen: true})
    }
    render() {
        const {container, buttonpadding } = styles
        const { isOpen } = this.state
        return (
           <View style={[container, !isOpen && buttonpadding]}>
                {isOpen ? (
                    <TimerForm />
                )  : (
                    <TimerButton onPress={this.handleFormOpen} title="+" color="black"/>
                ) 
            }
           </View>
        )
    }
    }


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    buttonpadding: {
        paddingHorizontal: 15,
    }
})