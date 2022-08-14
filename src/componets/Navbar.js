import React, { useRef } from "react";
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import { useProduct } from '../Context/Product';

const Navbar = () => {
  const { despatch } = useProduct()
  let timer = useRef();

  const inputHandler = (value) => {
    clearInterval(timer)
    timer = setTimeout(() => {
      despatch({ type: 'search', payload: value })
    }, 1000)
  }


  return (
    <>
      <header className="navbar  navbar-dark bg-primary ">

        <nav className="container d-flex" >

          <img src="/img/WhatsApp Image 2022-04-20 at 1.10.06 PM.jpeg" className="img-fluid logo" alt="none" />

          <form className="d-flex bg-white ">
            <input onChange={e => { inputHandler(e.target.value) }} type="text" className="form-control search" placeholder="Search for Products brand and more"
              aria-label="Username" aria-describedby="basic-addon1" />
            <span className="input-group-text bg-white border-white" id="basic-addon1">
              <i className="bi bi-search"></i></span>
          </form>

          <Link to='/login' >

            <button className="btn btn-outline-success bg-white px- text-primary" type="submit"> Login</button>
          </Link>



          <form action="#">
            <select name="more" id="" className="bg-primary text-white border-primary w-50">
              {['More', '24x7 Customer Care', 'Advertise', 'Download App'].map(item => (

                <option key={item} value="more">{item}</option>
              ))}
            </select>
          </form>

<Link to='/Cart'>
          <span className="text-white shopping">
            <i className="bi bi-cart2"></i>
            &nbsp; Cart
          </span></Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Navbar