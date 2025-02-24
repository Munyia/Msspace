
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Department from './pages/Department'
import Activities from './pages/Activities'
import DashboardLayout from './layouts/DashboardLayout'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="activities" element={<Activities />} />
            <Route path="department" element={<Department />} />
          </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
