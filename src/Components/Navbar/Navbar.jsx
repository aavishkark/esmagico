import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='container'>
        <div className='left'>
            <img src='./Logo.png' alt=''/>
            <button>Offers</button>
            <button>Stories</button>
            <button>Tata Pay</button>
            <button>NeuPass</button>
        </div>
        <div className='right'>
            <div className='right1'>
            <input type='text' placeholder='Search Tata Neu' style={{padding:"5px",boxSizing:"border-box"}}/>
            </div>
            <div className='right2'>
            <div style={{display:"flex"}}>122018<div style={{alignSelf:"center",marginLeft:"10px"}}><img src='./location.png' alt='location'/></div></div>
            <div><img src='./cart.png' alt='cart'/></div>
            <div><img src='./notif.png' alt='notif'/></div>
            <div><img src='./profile.png' alt='profile'/></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar