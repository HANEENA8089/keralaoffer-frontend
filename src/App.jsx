import './App.css'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import InnerPage from './Pages/InnerPage'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path='/offer' element={<InnerPage/>}/>
  <Route path="/contactus" element={<ContactUs/>} />
  <Route path="/aboutus" element={<AboutUs/>} />


</Routes>
    </Router>
  )
}

export default App
