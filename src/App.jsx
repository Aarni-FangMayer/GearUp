import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Policy from './pages/Policy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
