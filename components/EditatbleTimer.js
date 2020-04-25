import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Timer from './Timer'
import TimerForm from './TimerForm'

export default class EditatbleTimer extends Component  {
    state = {
        editFormOpen: false,
    }

    handleEditPress = () => {
        this.openForm()
    }
    handleSubmit = timer => {
        const {onFormSubmit } = this.props
        onFormSubmit(timer)

        this.closeForm()
    }

    handleFormClose = () => {
        this.closeForm()
    }

    closeForm = () => {
        this.setState({ editFormOpen: false })
    }

    openForm = () => {
        this.setState({ editFormOpen: true })
    }
    render() {
        const { editFormOpen } = this.state
     const { id, title, project, elapsed, isRunning, onRemovePress, onStopPress, onStartPress } = this.props
        
     if (editFormOpen) {
            return <TimerForm 
                id={id} 
                title={title} 
                project={project}
                onFormSubmit = {this.handleSubmit}
                onFormClose={this.handleFormClose}
                />
        }
        return (
            <Timer 
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                isRunning={isRunning}
                onEditPress={this.handleEditPress}
                onRemovePress={onRemovePress}
                onStartPress={onStartPress}
                onStopPress={onStopPress}
            />
        )
    }
}

