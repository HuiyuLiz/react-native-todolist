import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../Input';
import { colors, spacing, borderRadius, fontSize } from '../../theme';

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() === '') return;
    onAddTodo(todo.trim());
    setTodo('');
  };

  return (
    <View style={styles.container}>
      <Input value={todo} onChangeText={setTodo} placeholder="Add a new todo" />
      <TouchableOpacity onPress={handleAddTodo} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  button: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.text.white,
    fontSize: fontSize.md,
    fontWeight: 'bold',
  },
});
