import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About.jsx'
import Vans from '../components/Vans.jsx'
import VanDetail from '../components/VanDetail.jsx'
import Layout from '../components/Layout.jsx'
import './App.scss'
import './server.js'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
