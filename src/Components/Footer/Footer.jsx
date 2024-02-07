import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footercontainer'>
        <div className='footerleft' style={{width:"160px",height:"136px"}}>
            <div style={{width:"71px",height:"51px",marginBottom:"40px"}}><img src='./Logo (1).png' alt='logo1'/></div>
            <div style={{width:"160px",height:"24px",display:"flex",justifyContent:"space-between"}}>
            <img src='./fb.png' alt='fb'/>
            <img src='./insta.png' alt='insta'/>
            <img src='./yt.png' alt='yt'/>
            <img src='./linkedin.png' alt='linkedin'/>
            </div>
        </div>
        <div className='footerright'>
        <div>
            <div style={{fontSize:"18px",fontWeight:"500",marginBottom:"10px"}}>Help & Support</div>
            <div>Terms & Service</div>
            <div>Privacy Poilicy</div>
            <div>FAQ</div>
        </div>
        <div>
        <div style={{fontSize:"18px",fontWeight:"500",marginBottom:"10px"}}>Customer Care</div>
            <div>2972 Weistmeister Rd. illinois 85486</div>
            <div>Privacy Poilicy</div>
            <div>FAQ</div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer