import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"

interface CartItemProps {
  id: number
  name: string
  price: number
  imageUrl: string
  onRemove: (id: number) => void
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  imageUrl,
  onRemove,
}) => {
  return (
    <Flex
      alignItems="center"
      p={4}
      borderBottom="1px solid"
      borderColor="gray.200">
      <Image
        src={imageUrl}
        alt={name}
        boxSize="100px"
        objectFit="contain"
        mr={4}
      />
      <Box flex="1">
        <Text fontSize="lg">{name}</Text>
        <Text color="gray.500">${price.toFixed(2)}</Text>
      </Box>
      <IconButton
        aria-label="Remove item"
        icon={<FaTrash />}
        variant="ghost"
        colorScheme="red"
        onClick={() => onRemove(id)}
      />
    </Flex>
  )
}

export default CartItem
