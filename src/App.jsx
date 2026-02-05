import Home from './Pages/Home'
import Payment from './Pages/Payment'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment/:orderId' element={<Payment />} />
      </Routes>
    </Router>
  )
}

export default App