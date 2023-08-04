// import React from 'react'
import { useState } from "react"
import { Box, Input, Button } from "@chakra-ui/react"

interface FormData {
  name: string
  email: string
  date: string
  // Add more fields as needed.
}

export default function Payment() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    // Add more fields as needed.
  })

  const handleChange = (e: any): void => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (): Promise<void> => {
    try {
      const response = await fetch("YOUR_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log("Booking submitted successfully:", data)
    } catch (error) {
      console.error("Error submitting booking:", error)
    }
  }

  return (
    <Box p={4}>
      <Input
        mb={4}
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        mb={4}
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        mb={4}
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />
      <Button
        colorScheme="blue"
        onClick={handleSubmit}>
        Book Now
      </Button>
    </Box>
  )
}
