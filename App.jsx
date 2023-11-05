import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLayout from './layouts/MainLayout';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const Stack = createStackNavigator();

function App() {
  // Initialize the tasks state with your initial list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog',
  ]);

  // Function to add new tasks
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="ToDoForm">
          {(props) => (
            <MainLayout>
              <ToDoForm {...props} addTask={addTask} />
            </MainLayout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
