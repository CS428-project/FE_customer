import firebase from "firebase/app"
import "firebase/auth"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJrKgVty46IskE33w_RPrJpzPuTjUum_A",
  authDomain: "e-com-auth-4d5c0.firebaseapp.com",
  projectId: "e-com-auth-4d5c0",
  storageBucket: "e-com-auth-4d5c0.appspot.com",
  messagingSenderId: "890040824492",
  appId: "1:890040824492:web:f4553583d942cffb51e509",
}
const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app)
export default app
