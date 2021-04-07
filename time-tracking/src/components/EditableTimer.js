import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimerForm from './TimerForm.js';
import Timer from './Timer.js';

function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen
}) {
  if (editFormOpen) {
    return <TimerForm
      id={id}
      title={title}
      project={project}
    />
  }
  return <Timer
    id={id}
    title={title}
    project={project}
    elapsed={elapsed}
    isRunning={isRunning}
  />
}

const styles = StyleSheet.create({});

export default EditableTimer;
