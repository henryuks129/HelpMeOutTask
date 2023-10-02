import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import Home from './components/Home'
import Login from './pages/Login'
import User from './pages/User'
import Details from './pages/Details'

function App() {

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/Login' element={<Login/>} />
          <Route path='/User' element={<User/>} />
          <Route path='/Details/:id' element={<Details/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
