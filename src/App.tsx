import {Header, Footer} from './components/index';
import {Route, Routes} from 'react-router-dom'
import './App.css'
import { About, Category, Faqs, Home, Login, News, Profile, Registration, SignUp, BookingManage, BookingList } from './pages';


function App() {

  return (
    <>
      {/* <Card {...obj} ></Card> */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/mentor' element={<Registration/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route path='/booking-manage' element={<BookingManage />}/> */}
        {/* <Route path='/booking-list' element={<BookingList />}/> */}

      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
