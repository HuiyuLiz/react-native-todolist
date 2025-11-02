/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { TodoInput } from './src/components';

function App() {
  const handleAddTodo = (todo: string) => {
    console.log(todo);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TodoInput onAddTodo={handleAddTodo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default App;
