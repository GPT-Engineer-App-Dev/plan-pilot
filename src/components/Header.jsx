import { Box, Heading } from '@chakra-ui/react';

const Header = () => (
  <Box as="header" bg="teal.500" color="white" py={4} textAlign="center">
    <Heading as="h1" size="lg">Todo App</Heading>
  </Box>
);

export default Header;