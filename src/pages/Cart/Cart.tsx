import { Box, Text, Button } from "@chakra-ui/react"
import { CartItem } from "../../components"

interface CartItemProps {
  id: number
  name: string
  price: number
  imageUrl: string
  onRemove: (id: number) => void
}
interface CartPageProps {
  cartItems: CartItemProps[]
  onRemoveItem: (id: number) => void
  setseeCart: (s: boolean) => void
}

const Cart: React.FC<CartPageProps> = ({
  cartItems,
  onRemoveItem,
  setseeCart,
}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  return (
    <Box
      p={8}
      mt={"15vh"}>
      <Text
        fontSize="xl"
        mb={4}>
        Your Cart
      </Text>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onRemove={onRemoveItem}
        />
      ))}
      <Box mt={4}>
        <Text fontSize="lg">Total: ${totalPrice.toFixed(2)}</Text>
        <Button
          mt={4}
          colorScheme="blue">
          Checkout
        </Button>
      </Box>
      <Button
        mt={4}
        colorScheme="blue"
        onClick={() => setseeCart(false)}>
        Back
      </Button>
    </Box>
  )
}

export default Cart
