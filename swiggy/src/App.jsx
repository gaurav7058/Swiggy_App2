import React, { lazy, Suspense } from 'react'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import "./App.css"
import Loader from "./Component/Loader.jsx"
import { Route, Routes } from 'react-router-dom'
// import RecomMenuItem from './Component/RecomMenuItem'
// import MenuItem from './Component/MenuItem'
// import Cards from './Component/Cards'
import Search from './Component/Search'
import CheakOut from './Component/CheakOut.jsx'

// import Cards from './Component/Cards.jsx'

const RecomMenuItem=lazy(()=>import("./Component/RecomMenuItem.jsx"))
const MenuItem=lazy(()=>import("./Component/MenuItem.jsx"))
const Cards=lazy(()=>import("./Component/Cards.jsx"))
export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback={<Loader></Loader>}>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='show/:query' element={<RecomMenuItem></RecomMenuItem>}></Route>
        <Route path='/menuitem/:resId' element={<MenuItem></MenuItem>}></Route>
        <Route path='/cards' element={<Cards></Cards>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/cheakout' element={<CheakOut></CheakOut>}></Route>
      </Routes>
      </Suspense>
    </div>
  )
}
