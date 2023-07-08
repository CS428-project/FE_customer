import React from 'react';
import { Box, Flex, Avatar, Heading, Text, Button } from '@chakra-ui/react';

const Profile = () => {
  return (
    <Box p={4} mt={'12vh'} className='flex_cen'>
    <Flex direction={'row'} alignItems={'center'} >

      <Flex direction="column" alignItems="center" mb={6} w={'50%'}>
        <Avatar size="2xl" name="John Doe" src="https://placekitten.com/200/200" />
        <Text color="gray.500">Frontend Developer</Text>
        <Button colorScheme="blue" m={'10px'} borderRadius={'10px'}>Edit Profile</Button>
        <Button colorScheme="blue" m={'10px'} borderRadius={'10px'}>Message</Button>
        <Button colorScheme="blue" m={'10px'} borderRadius={'10px'}>Notification</Button>
      </Flex>

      <Box w={'50%'}>
        <Heading mt={4} fontSize={'55'}>John Doe</Heading>
        <Text size="md" mb={2}>"About Me"</Text>
        <Heading size={'sm'} m={'7px'}>Date of birth:</Heading>
        <Heading size={'sm'} m={'7px'}>Gender:</Heading>
        <Heading size={'sm'} m={'7px'}>Contact:</Heading>
        <Heading size={'md'} m={'7px'}>Working experiences: </Heading>
        <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, leo ac fringilla scelerisque, nunc massa feugiat orci, vel egestas mauris metus in nisl.</Text>
      </Box>
    </Flex>
    </Box>
  );
};

export default Profile;
