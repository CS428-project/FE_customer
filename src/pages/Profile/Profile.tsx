import { Box, Flex, Avatar, Heading, Text, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

interface MentorInfoProps {
  name: string,
  position: string,
  fields: string[], 
  bio: string, 
  gender: string, 
  dateOfBirth: string,
  contact: string,
  workingExperiences: string, 
  avatar: string
}

const Profile = () => {
  const [mentorInfo, setMentorInfo] = useState<MentorInfoProps>();
  const mentorId = 8; 
  useEffect(() => {
    fetchMentorInfo();
  }, []); 

  const fetchMentorInfo = async () => {
    try {
      const res = await fetch(`https://64b659dfdf0839c97e156749.mockapi.io/api/v1/mentor/${mentorId}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      const info = await res.json();
      setMentorInfo(info);
    } catch(error) {
      console.error('Error fetching data', error);
    }
  };
  return (
    <Box p={4} mt={'12vh'} className='flex_cen'>
    <Flex direction={'row'} alignItems={'center'} >

      <Flex direction="column" alignItems="center" mb={6} w={'50%'}>
        <Avatar size="2xl" name={mentorInfo?.name} src={mentorInfo?.avatar} />
        <Text color="gray.500">{mentorInfo?.position}</Text>
        <Button colorScheme="blue" m={'10px'} borderRadius={'10px'}>Edit Profile</Button>
        <Button colorScheme="blue" m={'10px'} borderRadius={'10px'}>Message</Button>
        <Button colorScheme="blue" m={'10px'} borderRadius={'10px'}>Notification</Button>
      </Flex>

      <Box w={'50%'}>
        <Heading mt={4} fontSize={'55'}>{mentorInfo?.name}</Heading>
        <Text size="md" mb={2}>About Me: {mentorInfo?.bio}</Text>
        <Heading size={'sm'} m={'7px'}>Date of birth: {mentorInfo?.dateOfBirth}</Heading>
        <Heading size={'sm'} m={'7px'}>Gender: {mentorInfo?.gender}</Heading>
        <Heading size={'sm'} m={'7px'}>Contact: {mentorInfo?.contact}</Heading>
        <Heading size={'md'} m={'7px'}>Working experiences: </Heading>
        <Text mb={4}>{mentorInfo?.workingExperiences}</Text>
      </Box>
    </Flex>
    </Box>
  );
};

export default Profile;
