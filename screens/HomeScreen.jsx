import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function HomeScreen({ navigation }) { // Add the navigation prop
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog',
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My To-Do App</Text>
      <Text style={styles.subtitle}>Get organized and manage your tasks!</Text>
      
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />

      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;
