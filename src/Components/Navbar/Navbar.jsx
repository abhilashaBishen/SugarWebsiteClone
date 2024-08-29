import React, { useState } from 'react';

import './Navbar.css'
function Navbar() {
    const [menu,setMenu] = useState('shop');
  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("lips")}}>LIPS {menu ==="lips"? <hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("eye")}}>EYES {menu ==="eye"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("face")}}>FACE {menu ==="face"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("nail")}}>NAIL {menu ==="nail"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("skincare")}}>SKIN CARE {menu ==="skincare"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("accessories")}}>ACCESSORIES {menu ==="accessories"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("gifting")}}>GIFTING {menu ==="gifting"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("bestseller")}}>BEST SELLER {menu ==="bestseller"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("newlaunch")}}>NEW LAUNCH {menu ==="newlaunch"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("offer")}}>OFFER {menu ==="offer"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("blog")}}>BLOG {menu ==="blog"? <hr/>:<></>}</li>
      </ul>
    </div>
  )
}

export default Navbar
