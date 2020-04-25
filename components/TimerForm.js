import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import TimerButton from './TimerButton';

export default class TimerForm extends Component {
    constructor(props) {
        super(props)
        const { id, title, project } = props
        this.state = {
            title: id ? title : '',
            project: id ? project : '',
        }
    }

    handleTitleChange = title => {
        this.setState({ title })
    }

    handleProjectChange = project => {
        this.setState({ project })
    }

    handleSubmit = () => {
        const {onFormSubmit, id } = this.props
        const { title, project } = this.state

        onFormSubmit({
            id,
            title,
            project
        })
    }
        render () {
            const {id, onFormClose} = this.props
            const {title, project } = this.state
            const submitText = id ? 'Update' : 'Create'
            const { formContainer,
                    attributeContainer, 
                    textInputContainer, 
                    textInputTitle,
                    textInput, 
                    buttonGroup 
                   } = styles

            return (
                <View style={formContainer}>
                    <View style={attributeContainer}>
                        <Text style={textInputTitle}> {title} </Text>
                        <View style={textInputContainer}>
                            <TextInput
                                style={textInput}
                                underlineColorAndroid="transparent"
                               onChangeText={this.handleTitleChange}
                                value={title}
                             />
                        </View>
                    </View>
                    <View style={attributeContainer}>
                        <Text style={textInputTitle}>{project}</Text>
                        <View style={textInputContainer}>
                            <TextInput
                            style={textInput}
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleProjectChange}
                            value={project}
                             />
                        </View>
                    </View>
                    <View style={buttonGroup}>
                        <TimerButton 
                            small 
                            color="#21BA45" 
                            title={submitText}
                            onPress={this.handleSubmit} 
                            />
                        <TimerButton 
                            small 
                            color="#DB2828" 
                            title="Cancel"
                            onPress={onFormClose}
                             />
                    </View>
                </View>
            )
        }
      
    }
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputTitle: {
       fontSize: 15,
       fontWeight: "bold",
       marginBottom: 5,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})