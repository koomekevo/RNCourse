// eslint-disable no-use-before-define
// eslint-disable-next-line no-unused-vars
import React, { component } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your course goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
