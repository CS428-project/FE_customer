import React from 'react';
import { Box, Heading, Text, VStack, Link, List, ListItem, Divider } from '@chakra-ui/react';

export default function About() {
  return (
    <Box p={8} mt={40} maxWidth="800px" mx="auto">
      <VStack spacing={8} align="start">

        <Heading as="h1" size="4xl" textAlign="center" mb={6} color={"#146C94"}>About Us</Heading>

        <Box>
          <Heading as="h2" size="xl" mb={3}>Our Vision</Heading>
          <Text fontSize="xl">
            We aim to revolutionize the way individuals find coaches and book online appointments. Just as Mighty Networks seeks to unlock a new breed of culture creators and vibrant communities, we aspire to connect learners with the best coaches tailored to their needs.
          </Text>
        </Box>

        <Divider my={3} borderColor="gray.300" height="2px" />

        <Box>
          <Heading as="h2" size="xl" mb={3}>Our Mission</Heading>
          <Text fontSize="xl">
            We believe in the power of personalized learning and the impact of one-on-one coaching. Our platform is designed to bridge the gap between eager learners and expert coaches, providing a seamless experience for both.
          </Text>
        </Box>

        <Divider my={3} borderColor="gray.300" height="2px" />

        <Box>
          <Heading as="h2" size="xl" mb={3}>Our Team</Heading>
          <List spacing={4}>
            <ListItem>
              <Text fontSize="xl"><strong>Stephen Curry:</strong> Founder & CEO</Text>
              <Text mt={2} fontSize={"xl"}>"I envisioned a platform where finding the right coach is as easy as clicking a button. Our team has worked tirelessly to bring this vision to life."</Text>
            </ListItem>
            <ListItem>
              <Text fontSize="xl"><strong>Klay Thompson:</strong> Chief Technology Officer</Text>
              <Text mt={2} fontSize={"xl"}>"Building a platform that's both user-friendly and powerful is our primary goal. We're constantly innovating to offer the best experience."</Text>
            </ListItem>
            <ListItem>
              <Text fontSize="xl"><strong>Donte Divincenzo:</strong> Chief Marketing Officer</Text>
              <Text mt={2} fontSize={"xl"}>"We're not just about connecting coaches and learners; we're about building a community of growth and continuous learning."</Text>
            </ListItem>
          </List>
        </Box>

        <Divider my={3} borderColor="gray.300" height="2px" />

        <Box>
          <Heading as="h2" size="xl" mb={3}>In the Media</Heading>
          <Text fontSize="xl">
            While we're a budding platform, our unique approach to online coaching has garnered attention from various media outlets. Stay tuned for more updates!
          </Text>
        </Box>

        <Divider my={3} borderColor="gray.300" height="2px" />

        <Box>
          <Heading as="h2" size="xl" mb={3}>Join Our Journey</Heading>
          <Text fontSize="xl">
            We're always on the lookout for passionate individuals who believe in our mission. If you're interested in being a part of our journey, check out our <Link href="#" color="blue.500">career opportunities</Link>.
          </Text>
        </Box>

      </VStack>
    </Box>
  );
}
