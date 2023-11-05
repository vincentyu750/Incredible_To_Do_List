import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Import the MainLayout component

function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About Screen</Text>
        <Text style={styles.subtitle}>
          This app helps you stay organized and manage your tasks effectively.
        </Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
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

export default AboutScreen;
