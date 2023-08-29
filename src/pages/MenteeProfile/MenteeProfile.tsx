// import React from "react"
import { Box, Flex, Avatar, Heading, Text, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import logginState from "../../recoil/atom"
import { useNavigate } from "react-router-dom"
interface MentorInfoProps {
  name: string
  position: string
  fields: string[]
  bio: string
  gender: string
  dateOfBirth: string
  contact: string
  workingExperiences: string
  avatar: string
}

export default function MenteeProfile() {
  const [mentorInfo, setMentorInfo] = useState<MentorInfoProps>()
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(logginState)
  const nav = useNavigate()
  const logout = function (): void {
    setIsLoggedIn(false)
    console.log(isLoggedIn)
    nav("/login")
  }
  return (
    <div>
      <Flex
        direction="column"
        alignItems="center"
        mb={6}
        w={"50%"}
        mt={"18vh"}>
        <Avatar
          size="2xl"
          name={mentorInfo?.name}
          src={mentorInfo?.avatar}
        />
        <Text color="gray.500">{mentorInfo?.position}</Text>
        <Button
          colorScheme="blue"
          m={"10px"}
          borderRadius={"10px"}>
          Edit Profile
        </Button>
        <Button
          colorScheme="blue"
          m={"10px"}
          borderRadius={"10px"}>
          Message
        </Button>
        <Button
          colorScheme="blue"
          m={"10px"}
          borderRadius={"10px"}>
          Notification
        </Button>
        <Button
          colorScheme="gray"
          m={"10px"}
          borderRadius={"10px"}
          onClick={() => logout()}>
          logout
        </Button>
      </Flex>
    </div>
  )
}
