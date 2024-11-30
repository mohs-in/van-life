import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Layout from './components/Layout.jsx'
import Vans from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx'
import HostLayout from '/src/components/HostLayout'
import HostDashboard from './pages/Host/Dashboard.jsx'
import HostIncome from './pages/Host/HostIncome'
import HostReviews from './pages/Host/HostReviews.jsx'
import HostVans from './pages/Host/HostVans.jsx'
import HostVanDetail from './pages/Host/HostVanDetail.jsx'
import HostVanDetailInfo from './pages/Host/HostVanDetailInfo.jsx'
import HostVanDetailPricing from './pages/Host/HostVanDetailPricing.jsx'
import HostVanDetailPhotos from './pages/Host/HostVanDetailPhotos.jsx'

import './App.scss'
import './server.js'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />}/>
          
          <Route path='host' element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path='income' element={<HostIncome />} />
            <Route path='reviews' element={<HostReviews />} />
            <Route path='vans' element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=':id' element={<HostVanDetail />}>
                <Route index element={<HostVanDetailInfo />} />
                <Route path='pricing' element={<HostVanDetailPricing />} />
                <Route path='photos' element={<HostVanDetailPhotos />} />
              </Route>
            </Route>
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App
