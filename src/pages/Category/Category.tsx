import { Box, Container, Input, Grid, GridItem, Button } from "@chakra-ui/react"
import { Card } from "../../components/index"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import logginState from "../../recoil/atom"
import { Cart } from ".."
import { cart } from "../../recoil/atom"
import { FaShoppingCart } from "react-icons/fa"
// import NotLoggedInNotification from "../../helpers/notiLogin"
interface MentorInfoProps {
  name: string
  position: string
  fields: string[]
}

export default function Category() {
  const [mentorsInfo, setMentorsInfo] = useState<MentorInfoProps[]>([])
  const [mentorName, setmentorName] = useState("")
  const [seeCart, setseeCart] = useState(false)

  let [cartItems, setcartItems] = useRecoilState(cart)

  const handleRemoveItem = (id: number) => {
    cartItems = cartItems.filter((item) => item.id != id)
  }

  const handleAddItem = (id: number) => {
    cartItems = cartItems.filter((item) => item.id != id)
  }
  useEffect(() => {
    fetchMentorInfo()
  }, [])

  const fetchMentorInfo = async () => {
    try {
      const res = await fetch(
        "https://64b659dfdf0839c97e156749.mockapi.io/api/v1/mentor",
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )

      const info = await res.json()
      setMentorsInfo(info)
    } catch (err) {
      console.error("Error fetching data", err)
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(logginState)

  useEffect(() => {}, [])
  return (
    <div>
      {seeCart ? (
        <Cart
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
          setseeCart={setseeCart}
        />
      ) : (
        <div className="">
          <Container
            display={"flex"}
            justifyContent={"center"}
            mt={"12vh"}
            alignItems={"center"}
            maxW={"100%"}
            h={"14vh"}
            bg={""}>
            <Box
              className="category_title"
              padding="4"
              ml={"10vw"}
              w={"70%"}
              fontSize={40}
              color="black"
              maxH="l">
              Category
            </Box>
            <Button
              ml={"20px"}
              onClick={() => setseeCart(true)}>
              <FaShoppingCart size={30} />
            </Button>
            <Input
              placeholder="search for mentor, fields,..."
              size={"md"}
              w={"30%"}
              borderRadius="xl"
              border={"1px"}
              borderColor={"gray.400"}
              value={mentorName}
              onChange={(e) => setmentorName(e.target.value)}></Input>
          </Container>
          <hr
            className="flex_cen"
            style={{ width: "80%", margin: "0 auto 15px" }}
          />
          <div className="list_mentor flex_cen">
            <Grid
              templateColumns="repeat(4, 1fr)"
              gap={8}>
              {mentorsInfo.map((mentor: MentorInfoProps, index: number) => {
                return (
                  <GridItem key={index}>
                    <Card {...mentor} />
                  </GridItem>
                )
              })}
            </Grid>
          </div>
        </div>
      )}
    </div>
  )
}
