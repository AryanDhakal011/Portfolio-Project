import {Toaster} from './components/ui/toaster';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
  return (
   <>
   <Toaster />
   <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<Home />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
