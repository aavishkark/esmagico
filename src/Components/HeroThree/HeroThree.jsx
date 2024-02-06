import React from 'react'
import './herothree.css'
const HeroThree = () => {
  return (
    <div className='herothree'>
        <div className='heroleft'>
            <img src='./herothree.png' alt='herothreeimg'/>
        </div>
        <div className='heroright'>
                <div className='herothreeright1'>
                <img src='./light.png' alt='right' style={{width:"30px",height:"42px",alignSelf:"center",margin:"5px"}}/>
                <br/>
                <span style={{fontSize:"44px",fontWeight:"500",width:"447px",height:"61px"}}>Lightning Fast Process</span>
                </div>
                <br/>
                <div className='herothreeright2'>
                    <img src='./tl.png' alt='timeline'/>
                    <br/>
                    <span style={{width:"564px",height:"82px",display:"flex",margin:"auto",alignItems:"center",fontSize:"23px",fontWeight:"300"}}>Customer Share Basic Details</span>
                </div>
                <div style={{display:"flex"}}>
                <button style={{width:"274px",height:"56px",backgroundColor:"#8800EC",fontSize:"18px",padding:"10px 0px",color:"white",alignSelf:"center",marginLeft:"140px"}}>Apply Now</button>
                </div>
        </div>
    </div>
  )
}

export default HeroThree