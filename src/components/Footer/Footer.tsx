import { Stack, Text } from '@chakra-ui/react'

export const Footer = () => (
  <Stack
    justify="flex-start"
    align="flex-start"
    spacing="0px"
    width="100%"
    height="145px"
    maxWidth="100%"
  >
    <Stack
      paddingX="40px"
      paddingY="16px"
      justify="flex-start"
      align="center"
      spacing="10px"
      overflow="hidden"
      width="100%"
      flex="1"
      maxWidth="100%"
      background="#A7ECEE"
    >
      <Stack
        paddingStart="20px"
        paddingEnd="30px"
        direction="row"
        justify="flex-start"
        align="flex-start"
        spacing="100px"
      >
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="9px"
          height="105px"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.3"
            fontWeight="semibold"
            fontSize="20px"
            color="#000000"
            textAlign="center"
          >
            Address
          </Text>
          <Text
            fontFamily="Inter"
            lineHeight="1.3"
            fontWeight="regular"
            fontSize="20px"
            color="#000000"
          >
            235 Nguyen Van Cu Street, Ward 4, District 5, Ho Chi Minh City,
            Vietnam
          </Text>
        </Stack>
        <Stack justify="flex-start" align="flex-start" spacing="1px">
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="0px"
            opacity="0.8"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.3"
              fontWeight="semibold"
              fontSize="20px"
              color="#000000"
              textAlign="center"
            >
              Phone
            </Text>
            <Text
              fontFamily="Inter"
              lineHeight="1.3"
              fontWeight="regular"
              fontSize="20px"
              color="#000000"
            >
              (+028) 1234-567
            </Text>
          </Stack>
          <Stack justify="flex-start" align="flex-start" spacing="0px">
            <Text
              fontFamily="Inter"
              lineHeight="1.3"
              fontWeight="semibold"
              fontSize="20px"
              color="#000000"
              textAlign="center"
            >
              Email
            </Text>
            <Text
              fontFamily="Inter"
              lineHeight="1.3"
              fontWeight="regular"
              fontSize="20px"
              color="#000000"
            >
              info@caucheez.com
            </Text>
          </Stack>
        </Stack>
        <Stack justify="flex-start" align="flex-start" spacing="0px">
          <Text
            fontFamily="Inter"
            lineHeight="1.3"
            fontWeight="semibold"
            fontSize="20px"
            color="#000000"
            textAlign="center"
          >
            Terms of use
          </Text>
          <Text
            fontFamily="Inter"
            lineHeight="1.3"
            fontWeight="regular"
            fontSize="20px"
            color="#000000"
          >
            Privacy policy Refund policy FAQs
          </Text>
        </Stack>
        <Stack
          justify="flex-start"
          align="flex-start"
          spacing="0px"
          height="104px"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.3"
            fontWeight="semibold"
            fontSize="20px"
            color="#000000"
            textAlign="center"
          >
            Customer service
          </Text>
          <Text
            fontFamily="Inter"
            lineHeight="1.3"
            fontWeight="regular"
            fontSize="20px"
            color="#000000"
          >
            1900 1234 (for mentee) 19005678 (for mentor)
          </Text>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
)

