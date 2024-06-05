import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Layout from './components/Layout.jsx'
import Vans from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx'
import HostDashboard from './pages/Host/Dashboard.jsx'
import HostIncome from './pages/Host/HostIncome'
import HostReviews from './pages/Host/HostReviews.jsx'

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
          <Route path='/host' element={<HostDashboard />} />
          <Route path='/host/income' element={<HostIncome />} />
          <Route path='/host/reviews' element={<HostReviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
