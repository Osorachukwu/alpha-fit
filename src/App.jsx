import React from 'react'
import Nav from './components/nav/Nav'
import Contact from './pages/Contact'
import Transformations from './pages/Transformations'
// import FAQS from './pages/FAQS'
import Home from './pages/Home'
import AppRoutes from './routing/AppRouter'

export default function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  )
}
