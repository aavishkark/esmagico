import React from 'react'
import './herorefer.css'
const HeroRefer = () => {
  return (
    <div className='herorefer' style={{marginTop:"40px"}}>
        <div className='herereferleft' >
            <div style={{fontSize:"44px",fontWeight:"600",marginBottom:"10px"}}>Refer & Earn Now</div>
            <br/>
            <div style={{fontSize:"22px",fontWeight:"600",marginBottom:"10px"}}>Get a 500 Big Basket gift card</div>
            <br/>
            <div style={{fontSize:"18px",width:"274px",height:"56px",display:"flex",justifyContent:"center",backgroundColor:"#8800EC",marginBottom:"10px",borderRadius:"4px"}}><button style={{backgroundColor:"#8800EC",color:"white"}}>REFER AND EARN</button></div>
            <br/>
            <a href='#' style={{color:"#8800EC"}}>Terms and conditions apply</a>
        </div>
        <div className='image-container'>
            <img src='./ec1.png' alt='ec1'/>
            <img src='./mobile.png' alt='mobile'/>
            <img src='./frnd.png' alt='frnds'/>
        </div>
    </div>
  )
}

export default HeroRefer