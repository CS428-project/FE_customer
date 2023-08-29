import { atom } from "recoil"

const logginState = atom({
  key: "logginState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})

const cart = atom({
  key: "cart",
  default: [
    { id: 1, name: "Item 1", price: 10.99, imageUrl: "item1.jpg" },
    { id: 2, name: "Item 2", price: 15.99, imageUrl: "item2.jpg" },
  ],
})

export default logginState
export { cart }
