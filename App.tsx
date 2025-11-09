import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TodoInput, TodoList } from './src/components';
import { Todo } from './src/type';
import { colors, spacing } from './src/theme';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text: todo, completed: false },
    ]);
  };

  const handleCompleteTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleEditTodo = (id: number, text: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? { ...todo, text: text } : todo)),
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <TodoInput onAddTodo={handleAddTodo} />
      </View>
      <TodoList
        todos={todos}
        onCompleteTodo={handleCompleteTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
});

export default App;
