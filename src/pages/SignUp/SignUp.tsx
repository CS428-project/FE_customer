import React, { useState, ChangeEvent, FormEvent } from "react"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react"
import axios from "axios"

interface FormData {
  username: string
  password: string
  email: string
  phoneNumber: string
}
const API_URL = "http://localhost:8000/"

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios
      .post(API_URL + "/signup", formData)
      .then((response) => {
        console.log("Registration successful! Response:", response.data)
      })
      .catch((error) => {
        console.error("Error during registration:", error)
      })
  }

  return (
    <Box
      mt={"20vh"}
      p={4}
      maxWidth="400px"
      mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Heading>Signup</Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl id="phoneNumber">
            <FormLabel>Telephone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal">
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  )
}

export default App
