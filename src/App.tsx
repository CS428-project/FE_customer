import {Header} from './components/index';
import {Route, Routes} from 'react-router-dom'
import './App.css'
import { About, Category, Faqs, Home, News, Profile, Registration } from './pages';


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
      </Routes>
    </>
  )
}

export default App
