import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header/Header'

function App () {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>

    </>
  )
}

export default App
