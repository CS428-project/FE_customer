// components/NotLoggedInNotification.tsx
// import React from "react"
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"

export default function NotLoggedInNotification() {
  return (
    <Box mt={4}>
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle mr={2}>Not Logged In</AlertTitle>
        <AlertDescription>
          Please log in to access this feature.
        </AlertDescription>
      </Alert>
    </Box>
  )
}
