import React from 'react';
import { Box, Text, Collapse, Container, Flex, Icon } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'; // Importing icons

interface FAQProps {
    question: string;
    answer: string;
}

const faqs = [
  {
    question: "What is Coachee and how does it work?",
    answer: "Coachee is an online coaching platform that connects learners with expert coaches in various fields. Users can browse available courses, book sessions, and interact with coaches to enhance their skills and knowledge."
  },
  {
    question: "How do I sign up as a coach on the platform?",
    answer: "To become a coach, navigate to the \"Become a Coach\" section on our website, fill out the application form, and submit the required credentials. Our team will review your application and get back to you within a specified timeframe."
  },
  {
    question: "Can I get a refund if I'm not satisfied with a coaching session?",
    answer: "We prioritize customer satisfaction. If you're not pleased with a session, please reach out to our support team within 48 hours of the session. We'll review the case, and if valid, process a refund or offer a replacement session."
  },
  {
    question: "How do I schedule or reschedule a session?",
    answer: "Once you've booked a coach, you can schedule a session through the platform's calendar feature. If you need to reschedule, please do so at least 24 hours before the session to avoid cancellation fees."
  },
  {
    question: "Do you offer group coaching or corporate packages?",
    answer: "Yes, we offer both group coaching sessions and corporate packages tailored to organizational needs. Please contact our sales team for more details and customized solutions."
  },
  {
    question: "How are the coaches vetted?",
    answer: "All coaches on our platform undergo a rigorous vetting process, which includes verifying their credentials, assessing their expertise through interviews, and gathering feedback from previous clients."
  },
];

export default function FAQs() {

  return (
    <Container maxW="container.lg" mt="16vh">
      <Text fontSize="6xl" fontWeight="bold" mb={4} textAlign={"center"} color={"#146C94"}>
        Frequently Asked Questions
      </Text>
      <Box mt={10}>
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Box>
    </Container>
  );
}


const FAQ = ({ question, answer } : FAQProps) => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <Box mb={6} borderBottom="1px solid #E2E8F0" pb={4}>
      <Flex 
        onClick={handleToggle} 
        width="100%" 
        justifyContent="space-between" 
        fontSize={"2xl"} 
        cursor="pointer" 
        _hover={{ backgroundColor: "#F7FAFC" }} 
        p={4} 
        borderRadius="md"
      >
        {question}
        <Icon as={show ? ChevronUpIcon : ChevronDownIcon} w={6} h={6} />
      </Flex>
      <Collapse in={show}>
        <Text fontSize={"xl"} mt={2} pl={4}>{answer}</Text>
      </Collapse>
    </Box>
  );
};