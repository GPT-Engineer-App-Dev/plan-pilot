import { useState } from 'react';
import { Box, Input, Button, VStack, HStack, Text } from '@chakra-ui/react';

const MainSection = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <Box as="main" p={4}>
      <VStack spacing={4}>
        <HStack>
          <Input 
            placeholder="Add a new todo" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button colorScheme="teal" onClick={addTodo}>Add Todo</Button>
        </HStack>
        <VStack spacing={2} align="stretch" w="100%">
          {todos.map((todo, index) => (
            <Box key={index} p={2} bg="gray.100" borderRadius="md">
              <Text>{todo}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default MainSection;