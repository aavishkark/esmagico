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
            <input placeholder='Search Tata Neu'/>
            </div>
            <div className='right2'>
            <div>122018<img src='./location.png' alt='location'/></div>
            <div><img src='./cart.png' alt='cart'/></div>
            <div><img src='./notif.png' alt='notif'/></div>
            <div><img src='./profile.png' alt='profile'/></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar