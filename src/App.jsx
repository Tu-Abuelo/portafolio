import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About Me/About'
import Contact from './Pages/Contact/Contact'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
