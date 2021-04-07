import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditableTimer from '../components/EditableTimer';
import ToggleableTimerForm from '../components/ToggleableTimerForm';

function TimerListScreen() {
  return (
    <View style={styles.container}>
      <Text>TimerListScreen</Text>
      <Text>EditableTimer</Text>
      <ToggleableTimerForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TimerListScreen;
