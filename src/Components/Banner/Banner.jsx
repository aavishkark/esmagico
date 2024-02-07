import React from 'react'
import './banner.css'
const Banner = () => {
  return (
    <div className='bannercontainer'>
        <div className='bannerleft'>Our Partners</div>
        <div className='bannerright'>
            <div style={{marginTop:"15px"}}>
            <img src='./hdfc.png' alt='hdfc'/>
            <span style={{fontSize:"24px",fontWeight:"500"}}>HDFC Bank</span>
            </div>
            <div>
            <img src='./icici.png' alt='icici'/>
            <span style={{fontSize:"24px",fontWeight:"500"}}>ICICI Bank</span>
            </div>
            <div>
            <img src='./icici.png' alt='icici'/>
            <span style={{fontSize:"24px",fontWeight:"500"}}>ICICI Bank</span>
            </div>
            <div style={{marginTop:"15px"}}>
            <img src='./bob.png' alt='bob'/>
            <span style={{fontSize:"24px",fontWeight:"500"}}>Bank of Baroda</span>
            </div>
        </div>
    </div>
  )
}

export default Banner