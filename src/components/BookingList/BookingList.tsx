import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

export default function BookingList() {
  return (
    <Box width="90%" margin="0 auto" mt="12vh" mb="1vh">
      <Table size="lg" variant="simple" border="1px solid" borderColor="gray.400" width="100%">
        <Thead>
          <Tr>
            <Th border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Date</Th>
            <Th border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Start Time</Th>
            <Th border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">End Time</Th>
            <Th border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Topic</Th>
            <Th border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Format</Th>
            <Th border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Price</Th>
            <Th border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Note</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 5 }, (_, index) => (
            <Tr key={index}>
              <Td border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Date {index + 1}</Td>
              <Td border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Start Time {index + 1}</Td>
              <Td border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">End Time {index + 1}</Td>
              <Td border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Topic {index + 1}</Td>
              <Td border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Format {index + 1}</Td>
              <Td border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Price {index + 1}</Td>
              <Td border="1px solid" borderColor="gray.400" textAlign="center" verticalAlign="middle">Note {index + 1}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
