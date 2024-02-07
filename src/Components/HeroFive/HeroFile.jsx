import React from 'react'
import './herofile.css'
const HeroFile = () => {
  return (
    <div className='herofive'>
        <div style={{marginTop:"94px"}}>
        <div className='herofivetop'>
            <div style={{display:"flex"}}><img src='./eleg.png' alt='elegebility'/><div style={{margin:"5px"}}>Eligibility</div></div>
            <div style={{display:"flex"}}><img src='./apply.png' alt='apply'/><div style={{margin:"5px"}}>How to apply</div></div>
            <div style={{display:"flex"}}><img src='./doc.png' alt='doc'/><div style={{margin:"5px"}}>Documentation</div></div>
            <div style={{display:"flex"}}><img src='./charge.png' alt='charges'/><div style={{margin:"5px"}}>Fees & Charges</div></div>
        </div>
        <div className='herofivecontainer'>
            <div className='herofivecontainerleft'>
                <div style={{display:"flex",height:"70px"}}>
                    <img src='./star.png' alt='herofivestar' style={{width:"24px",height:"24px",padding:"10px"}}/>
                    <div>
                        <span style={{fontSize:"22px",fontWeight:"bold"}}>Citizenship Proof</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>Indian Citizen With Valid ID Proof</span>
                    </div>
                </div>
                <div style={{display:"flex",height:"70px"}}>
                    <img src='./star.png' alt='herofivestar1' style={{width:"24px",height:"24px",padding:"10px"}}/>
                    <div>
                        <span style={{fontSize:"22px",fontWeight:"bold"}}>Age</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>23 To 58 Years Of Age</span>
                    </div>
                </div>
                <div style={{display:"flex",height:"70px"}}>
                    <img src='./star.png' alt='herofivestar2' style={{width:"24px",height:"24px",padding:"10px"}}/>
                    <div>
                        <span style={{fontSize:"22px",fontWeight:"bold"}}>Lorem</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>Lorem ipsum</span>
                    </div>
                </div>
                <div style={{display:"flex",height:"70px"}}>
                    <img src='./star.png' alt='herofivestar4' style={{width:"24px",height:"24px",padding:"10px"}}/>
                    <div>
                        <span style={{fontSize:"22px",fontWeight:"bold"}}>Lorem</span>
                        <br/>
                        <span style={{fontSize:"20px"}}>Lorem opsum</span>
                    </div>
                </div>
                
            </div>
            <div><img alt='herofile' style={{width:"385px",height:"391px"}} src='./herofive.png'/></div>
        </div>
        </div>
    </div>
  )
}

export default HeroFile