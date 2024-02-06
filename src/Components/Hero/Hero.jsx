import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className='herocontainer'>
        <div className='heroleft'>
            <div className='heroleft1'>
                <span>Turn Dreams Into Reality</span><br/>
                <span>With <sspanan style={{color:"#FF0096"}}>Personal Loans</sspanan></span>
            </div>
            <div className='heroleft2'>
                <div className='heroleft21'>
                <img src='./Vector.png' alt="avail zero" className='leftimg'/>
                <div>
                    <span>Avail Zero</span><br/><span>Processing Fee</span>
                </div>
                </div >
                <div className='heroleft21'>
                <img src='./Frame.png' alt="quick"  className='leftimg'/>
                <div>
                    <span>Quick</span><br/><span>Personal Loan</span>
                </div>
                </div>
                <div className='heroleft21'>
                <img src='./lowest.png' alt="lowest" className='leftimg'/>
                <div>
                    <span>Lowest</span><br/><span>Intrest Rates</span>
                </div>
                </div>
                <div className='heroleft21'>
                <img src='./mini.png' alt="mini" className='leftimg'/>
                <div >
                    <span>Miniamal</span><br/><span>Documentation</span>
                </div>
                </div>
            </div>
            <div className='heroleft3'>
                <button className='herobtn'>Apply Now</button>
            </div>
        </div>
        <div>
            <img src='./father.png' alt='hero1'/>
        </div>
    </div>
  )
}

export default Hero