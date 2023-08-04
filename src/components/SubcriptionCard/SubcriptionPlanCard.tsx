import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface SubscriptionPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
}

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
  isSelected: boolean;
  onSelect: (planId: number) => void;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({
  plan,
  isSelected,
  onSelect,
}) => {
  const handlePlanSelection = () => {
    onSelect(plan.id);
  };
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      cursor="pointer"
      onClick={handlePlanSelection}
      borderColor={isSelected ? "teal.400" : "gray.300"}
    >
      <Text fontSize="lg" fontWeight="bold">
        {plan.name}
      </Text>
      <Text fontSize="xl" fontWeight="bold" mt={2}>
        {plan.price}
      </Text>
      <Box mt={4}>
        {plan.features.map((feature, index) => (
          <Text key={index}>{feature}</Text>
        ))}
      </Box>
    </Box>
  );
};

export default SubscriptionPlanCard;
