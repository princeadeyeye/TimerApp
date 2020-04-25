import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import EditableTimer from './components/EditatbleTimer'
import ToggleableTimerForm from './components/ToggleableTimerForm'
import { newTimer } from './components/utils/TimerUtils'


export default class App extends Component {
  state = {
    timers: []
  }
  componentDidMount() {
    const TIME_INTERVAL = 100;

    this.intervalId = setInterval(() => {
      const { timers } = this.state;

      this.setState({
        timers: timers.map(timer => {
          const { elapsed, isRunning } = timer;

          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed
          }
        })
      })
    }, TIME_INTERVAL)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  handleCreateFormSubmit = timer => {
    const { timers } = this.state
    this.setState({
      timers: [newTimer(timer), ...timers]
    })
  }

  toggleTimer = timerId => {
    this.setState(prevState => {
      const { timers } = prevState

      return {
        timers: timers.map(timer => {
          const { id, isRunning } = timer

          if (id === timerId) {
            return {
              ...timer,
              isRunning: !isRunning
            }
          }

          return timer
        })
      }
    })
  }

  handleFormSubmit = attr => {
    const {timers} = this.state

    this.setState({
      timers: timers.map(timer => {
        if(timer.id === attr.id) {
          const { title, project } = attr

          return {
            ...timer,
              title,
              project
          }
        }
        return timer
      })
    })
  }

  handleRemovePress = timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId)
    })
  }
    render() {
      const { timers } = this.state 
      const { container, titleContainer, title, timerList } = styles
      return (
        <View style={container}>
         <View style={titleContainer}>
          <Text style={title}>Timers</Text>
         </View>
         <ScrollView style={timerList}>
            <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
            {timers.map (({ title, id, project, elapsed, isRunning }) => (
              <EditableTimer 
                key={id}
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                isRunning={isRunning}
                onFormSubmit={this.handleFormSubmit}
                onRemovePress={this.handleRemovePress}
                onStartPress={this.toggleTimer}
                onStopPress={this.toggleTimer}
            />
            ))}
         </ScrollView>
        </View>
      );
    }
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  timerList: {
    paddingBottom: 15,
  }, 
  timerListContainer: {
    flex: 1,
    },
});
