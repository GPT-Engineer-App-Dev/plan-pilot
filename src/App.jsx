import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

const App = () => (
  <ChakraProvider>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flex="1">
        <MainSection />
      </Box>
      <Footer />
    </Box>
  </ChakraProvider>
);

export default App;