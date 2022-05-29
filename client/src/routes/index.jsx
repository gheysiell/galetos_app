import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Pedidos } from '../pages/Pedidos'

export const AppRouter = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/pedidos" element={<Pedidos/>}/>
         </Routes>
      </BrowserRouter>
   )
}