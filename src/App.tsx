import { Header, Footer } from "./components/index"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import {
  About,
  Category,
  FAQs,
  Home,
  Login,
  MenteeProfile,
  News,
  Profile,
  Registration,
  SignUp,
} from "./pages"
import { RecoilRoot } from "recoil"

function App() {
  return (
    <>
      <RecoilRoot>
        {/* <Card {...obj} ></Card> */}
        <Header></Header>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/news"
            element={<News />}
          />
          <Route
            path="/faqs"
            element={<FAQs />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/mentor"
            element={<Registration />}
          />
          <Route
            path="/category"
            element={<Category />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/mentee"
            element={<MenteeProfile />}
          />

          {/* <Route path='/booking-manage' element={<BookingManage />}/> */}
          {/* <Route path='/booking-list' element={<BookingList />}/> */}
        </Routes>
        <Footer></Footer>
      </RecoilRoot>
    </>
  )
}

export default App
