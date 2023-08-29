import { useState } from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const goToSignup = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <Box
          borderWidth={1}
          borderRadius="md"
          p={8}
          maxWidth={400}
          width="100%"
          bg={"#FFEEBB"}>
          <Heading
            color={"#99DBF5"}
            mb={"6"}
            marginX={"auto"}>
            Login
          </Heading>
          <form
            action="#"
            onSubmit={handleLogin}>
            <FormControl mb={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border={"1px"}
                color={"#99DBF5"}
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                border={"1px"}
                color={"#99DBF5"}
              />
            </FormControl>

            <Button
              colorScheme="blue"
              type="submit"
              width="full">
              Sign In
            </Button>
          </form>

          <Button
            variant="outline"
            colorScheme="blue"
            width="full"
            my={"7px"}
            onClick={() => {
              goToSignup("/signup")
            }}>
            Create Account
          </Button>
          <Text
            textAlign="center"
            fontSize="sm">
            <a href="#">Forgot Password?</a>
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default LoginPage
