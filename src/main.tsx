import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import DashboardPage from './pages/DashboardPage.tsx'
import HomePage from './pages/HomePage.tsx'
import DashboardHomePage from './pages/DashboardHomePage.tsx'
import DashboardProductPage from './pages/DashboardProductPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import LoginPage from './pages/LoginPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<DashboardPage/>}>
            <Route index element={<Navigate to="/dashboard/home" replace />} />
            <Route path='/dashboard/home' index element={<DashboardHomePage/>}/>
            <Route path='/dashboard/product' element={<DashboardProductPage/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
