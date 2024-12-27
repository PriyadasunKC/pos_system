import 'react' 
import AddProduct from './components/AddProduct'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
