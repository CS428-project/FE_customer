import { Box, Flex, Heading, SimpleGrid,Button } from "@chakra-ui/react"
import { useState} from "react"
import { SubscriptionPlanCard } from "../../components"

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "$10",
    features: ["Feature 1", "Feature 2"],
  },
  {
    id: 2,
    name: "Standard",
    price: "$20",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 3,
    name: "Premium",
    price: "$30",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
]

const Billing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const handlePlanSelection = (planId: number) => {
    setSelectedPlan(planId)
  }

  const handlePayment = () => {
    // Implement the logic for handling the payment here, based on the selectedPlan
    if (selectedPlan !== null) {
      console.log(`User selected plan with id: ${selectedPlan}`)
      // Implement your payment logic here
      // You might want to redirect the user to a payment gateway or show a payment modal
    }
  }
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      mt="15vh">
      <Box
        p={8}
        maxW="500px"
        borderWidth={1}
        borderRadius="lg">
        <Heading mb={4}>Choose Your Plan</Heading>
        <SimpleGrid
          columns={1}
          spacing={4}>
          {plans.map((plan) => (
            <SubscriptionPlanCard
              key={plan.id}
              plan={plan}
              isSelected={selectedPlan === plan.id}
              onSelect={handlePlanSelection}
            />
          ))}
        </SimpleGrid>
        {selectedPlan && (
          <Box mt={4}>
            <Heading
              size="md"
              mb={2}>
              Bill Details
            </Heading>
            {/* Replace 'billAmount' with your actual bill amount */}
            <Box
              p={4}
              borderWidth={1}
              borderRadius="md">
              <p>
                Selected Plan:{" "}
                {plans.find((plan) => plan.id === selectedPlan)?.name}
              </p>
              {/* Replace 'billAmount' with your actual bill amount */}
              <p>Total Amount: $billAmount</p>
            </Box>
            <Button
              onClick={handlePayment}
              mt={4}
              colorScheme="teal">
              Pay Now
            </Button>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default Billing
