import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RoleSelection from './pages/RoleSelection.jsx'
import ShopperRegistration from './pages/ShopperRegistration.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/shopper-registration" element={<ShopperRegistration />} />
      </Routes>
    </Router>
  )
}

export default App
