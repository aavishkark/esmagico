import React from 'react'
import './herotwo.css'
const HeroTwo = () => {
  return (
    <div className='containerherotwo'>
        <div className='heading'><img src='./headstar.png' alt='headstar' className='headstar'/>Personal Loan Highlights</div>
        <div className='subcontainerherotwo'>
        <div className='subcontainerherotwoleft'>
            <img src='./herotwo.png' alt='herotwo' className='herotwoimg'/>
        </div>
        <div className='subcontainerherotworight'>
            <div className='intrestrightparent'>
            <div className='intrestright'>
                        <img src='star.png' alt='star1' className='' style={{padding:"5px"}}/>
                        <div>
                        <span style={{fontWeight:"bold",width:"476px",fontSize:"28px"}}>Intrest Rate</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>Usually 10.49% p.a. nwards: some PSUs may offer lower rates</span>
                        </div>
                    </div>
                    <div className='intrestright'>
                        <img src='star.png' alt='star2' style={{padding:"5px"}}/>
                        <div>
                        <span style={{fontWeight:"bold",width:"476px",fontSize:"28px"}}>Loan Amount</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>Can go up to RS 40 lakh: some lenders may offer higher loan amount</span>
                        </div>
                    </div>
                    <div className='intrestright'>
                        <img src='star.png' alt='star3' style={{padding:"5px"}}/>
                        <div>
                        <span style={{fontWeight:"bold",width:"476px",fontSize:"28px"}}>Processing Fee</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>0.5% to 4% of loan amount (may vary across lenders)</span>
                        </div>
                    </div>
                    <div className='intrestright'>
                        <img src='star.png' alt='star4' style={{padding:"5px"}}/>
                        <div>
                        <span style={{fontWeight:"bold",width:"476px",fontSize:"28px"}}>Tenure</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>Up to 5 years (some lenders offer repayment period till 8 years</span>
                        </div>
                    </div>
            </div>
        </div>             
    </div>
    </div>
  )
}

export default HeroTwo