import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Import the MainLayout component

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff', // Set a white background
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
