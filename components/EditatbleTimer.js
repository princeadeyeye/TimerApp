import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Timer from './Timer'
import TimerForm from './TimerForm'

export default class EditatbleTimer extends Component  {
    state = {
        editFormOpen: false,
    }
    render() {
        const { editFormOpen } = this.state
     const { id, title, project, elapsed, isRunning } = this.props
        if (editFormOpen) {
            return <TimerForm id={id} title={title} project={project} />
        }
        return (
            <Timer 
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                isRunning={isRunning}
            />
        )
    }
}

