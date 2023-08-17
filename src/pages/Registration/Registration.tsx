// MentorRegistration.tsx
import React, { useState, ChangeEvent, FormEvent } from "react"
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react"

interface FormData {
  fullName: string
  email: string
  expertise: string
  bio: string
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    expertise: "",
    bio: "",
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // You can add form validation and data submission logic here
    console.log(formData) // Replace with your actual logic
  }

  return (
    <Box
      mt={"15vh"}
      maxW="md"
      mx="auto"
      p={4}
      borderWidth="1px"
      borderRadius="md">
      <Heading mb={4}>Mentor Registration</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Expertise</FormLabel>
          <Select
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required>
            <option value="">Select Expertise</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
            {/* Add more options here */}
          </Select>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Bio</FormLabel>
          <Textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            required
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default Registration
