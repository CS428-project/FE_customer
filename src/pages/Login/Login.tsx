import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          borderWidth={1}
          borderRadius="md"
          p={8}
          maxWidth={400}
          width="100%"
          bg={'#FFEEBB'}
        >
          <Heading color={'#99DBF5'} mb={'6'} marginX={'auto'}>Login</Heading>
          <FormControl mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              border={'1px'}
              color={'#99DBF5'}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              border={'1px'}
              color={'#99DBF5'}
            />
          </FormControl>

          <Button colorScheme="blue" onClick={handleLogin} width="full">
            Sign In
          </Button>

        <Button
          variant="outline"
          colorScheme="blue"
          width="full"
          my={'7px'}
          onClick={() => {
            // Add your logic for creating a new account here
            console.log('Creating account...');
          }}
        >
          Create Account
        </Button>
          <Text textAlign="center" fontSize="sm">
            <a href="#">Forgot Password?</a>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;
