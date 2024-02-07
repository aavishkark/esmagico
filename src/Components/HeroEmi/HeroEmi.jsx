import React from 'react'
import './heroemi.css'
const HeroEmi = () => {
  return (
    <div className='heroemi'>
        <div className='heroemihead' style={{marginLeft:"130px",marginBottom:"20px"}}><span style={{width:"50px",height:"50px",margin:"10px"}}><img src='./hand2.png' alt='hand2'/></span><span style={{fontSize:"44px",fontWeight:"600"}}>EMI Calculator</span></div>
        <div className='heroemicontainer'>
            <div className='heroemicontainerleft' style={{borderRadius:"14px"}}>
                <div>
                <span style={{fontSize:"20px",color:"#959595"}}>Loan Amount</span>
                <br/>
               <input type='number' placeholder='300000'/>
                <br/>
                <input type='range'/>
                <br/>
                </div>
                <div>
                <span style={{fontSize:"20px",color:"#959595"}}>Intrest Rate(%)</span>
                <br/>
                <input type='number' placeholder='10.5'/>
                <br/>
                <input type='range'/>
                <br/>
                </div>
                <div>
                <span style={{fontSize:"20px",color:"#959595"}}>Loan Tenure (In Months)</span>
                <br/>
                <input type='number' placeholder='24'/>
                <br/>
                <input type='range'/>
                <br/>
                </div>
            </div>
            <div className='heroemicontainerright' style={{fontSize:"20px",borderRadius:"14px"}}>
                <div>
            <div style={{width:"346px",height:"189px",padding:"50px"}}><img src='./heroemi.png' alt='heroemi'/></div>
            <div style={{width:"340px",height:"164px"}}>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"30px"}}>
                <span style={{fontSize:"20px"}}><img src='./color.png' alt="color" style={{marginRight:"10px"}}/>Principal Amount</span>
                <span style={{color:"#8800EC",fontSize:"20px",fontWeight:"bold"}}>₹3,00,000</span>
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"40px"}}>
                <span style={{fontSize:"20px"}}><img src='./grey.png' alt="grey" style={{marginRight:"10px"}}/>Interest Amount</span>
                <span style={{color:"#8800EC",fontSize:"20px",fontWeight:"bold"}}>₹59,454</span>
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"30px"}}>
                <span style={{fontSize:"20px"}}>Total Amount Payable</span>
                <span style={{color:"#8800EC",fontSize:"20px",fontWeight:"bold"}}>₹3,59,454</span>
            </div>
            </div>
                </div>
                <div className='heroemicontainerrightright'>
                    <div className='heroemirighteq' style={{fontWeight:"bold",textAlign:"center",marginBottom:"50px"}}>
                        <span style={{fontSize:"25px"}}>Equated Monthly</span>
                        <br/>
                        <span style={{fontSize:"25px"}}>Installments(EMI)</span>
                        <br/>
                        <span style={{fontSize:"40px"}}>₹14,977</span>
                    </div>
                    <div className='heroemirightbtn' style={{width:"274px",height:"56px",padding:" 10px 60px",alignItems:"center",backgroundColor:"#8800EC",boxSizing:"border-box",display:"flex",justifyContent:"center"}}>
                        <button style={{backgroundColor:"#8800EC",color:"white",fontSize:"18px"}}>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroEmi