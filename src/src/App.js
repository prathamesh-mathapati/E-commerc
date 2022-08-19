import "./App.css";

import NavBar from './componets/Navbar';
import ProductsList from "./componets/PoductsList";
import {Routes, Route } from 'react-router-dom'
import Login from "./componets/Login";
import CreateAcc from "./componets/CreateAcc";
import Cart from "./componets/Cart";
import Favorite from "./componets/Favorite";

function App() {
  return (
    <>
<Routes>

<Route path="/" element={<NavBar/> }>
<Route index element={<ProductsList/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/create' element={<CreateAcc/>} />
<Route path='/Cart' element={<Cart/>}/></Route> 
<Route path='/Favorite' element={<Favorite/>}></Route>

</Routes>
    </>
  );
}

export default App;
