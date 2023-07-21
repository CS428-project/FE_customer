import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAgVxH_vT5cguvf-_WkV5iiow1SH_ndUlc",
  authDomain: "database-cs428.firebaseapp.com",
  projectId: "database-cs428",
  storageBucket: "database-cs428.appspot.com",
  messagingSenderId: "222505566803",
  appId: "1:222505566803:web:875a645e42cc4472583ca6",
})

export const auth = app.auth()
export default app