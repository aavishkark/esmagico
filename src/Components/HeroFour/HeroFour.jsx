import React from 'react'
import './herofour.css'
const HeroFour = () => {
  return (
    <div className='herofour'>
        <div className='herofourhead' style={{paddigTop:"61px"}}>
        <img src='./hands.png' alt='hands'/><div style={{width: "501px",
    height:"61px",fontSize:"38px"}}>What Our Customer Says</div></div>
        <div className='herofourcontainer'>
            <div className='herofourleft'>
                <img alt='herofour' src='./herofour.png'/>
            </div>
            <div className='herofourright'>
                <div style={{width:"100px",height:"70px",alignSelf:"center",position:"relative",bottom:"120px",right:"20px"}} className='herofourmid'>
            <img src='./quote.png' alt='quote'/>
            </div>
                <div style={{width:"600px",height:"215px"}}>
                    <span style={{fontWeight:"bold",fontSize:"24px",marginBottom:"15px"}}>SUNIL GUPTA</span>
                    <br/>
                    <span style={{fontWeight:"bold",fontSize:"18px",marginBottom:"15px"}}>Chartered Accountant</span>
                    <br/>
                    <span style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</span>
                    <br/>
                    <img src='./pagi.png' alt='pagination'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroFour