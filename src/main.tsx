import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardPage from './pages/DashboardPage.tsx'
import HomePage from './pages/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
