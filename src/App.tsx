import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Programs from './pages/Programs'
import About from './pages/About'
import Calendar from './pages/Calendar'
import Donate from './pages/Donate'

function App() {
  return (
    <Box minH="100vh">
      <Router>
        <Navbar />
        <Box as="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  )
}

export default App
