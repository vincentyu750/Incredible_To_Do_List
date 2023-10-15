import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // Initialize the tasks state with your initial list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Function to add new tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,  // Add a border to the entire app
    paddingTop: 50,   // Add 50px padding from the top
  },
});

export default App;
