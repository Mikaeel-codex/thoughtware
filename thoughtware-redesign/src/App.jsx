import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}
