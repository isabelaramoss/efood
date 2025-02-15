import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import FoodMenu from './pages/FoodMenu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<FoodMenu />} />
  </Routes>
)

export default Rotas
