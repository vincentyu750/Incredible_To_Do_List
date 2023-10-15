import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';

function ToDoList({ tasks }) { // Receive tasks as a prop
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
