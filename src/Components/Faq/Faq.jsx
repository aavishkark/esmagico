import React from 'react'
import './faq.css'
const Faq = () => {
  return (
    <>
    <div className='faqcontainer'>
        <div className='faqhead'> 
        <div style={{width:"50px",height:"50px",display:"flex",alignSelf:"center"}}><img src='./que.png' alt='que'/></div>
        <div style={{fontSize:"44px",fontWeight:"500"}}>FAQ'S</div>
        </div>
        <div className='questions'> 
            <div>
                <div>1.Lorem ipsum dolor sit Amet, Consectetur Adipiscing Eilt</div>
                <div>+</div>
            </div>
            <div>
                <div>2.Lorem ipsum dolor sit Amet, Consectetur Adipiscing Eilt</div>
                <div>+</div>
            </div>
            <div>
                <div>3.Lorem ipsum dolor sit Amet, Consectetur Adipiscing Eilt</div>
                <div>+</div>
            </div>
            <div>
                <div>4.Lorem ipsum dolor sit Amet, Consectetur Adipiscing Eilt</div>
                <div>+</div>
            </div>
            <div>
                <div>5.Lorem ipsum dolor sit Amet, Consectetur Adipiscing Eilt</div>
                <div>+</div>
            </div>
            <div>
                <div>6.Lorem ipsum dolor sit Amet, Consectetur Adipiscing Eilt</div>
                <div>+</div>
            </div>
            <div>
                <div>7.Lorem ipsum dolor sit Amet, Consectetur Adipiscing Eilt</div>
                <div>+</div>
            </div>
        </div>
    </div>
     <div className='faqbottom'>
     <div>
     <div style={{fontSize:"24px",fontWeight:"500"}}>Anything not clear?</div>
     <div style={{fontSize:"18px"}}>You can see our detailed F&Q sessiond if you have more questions also we are always a sindle call away from all your specisla asks</div>
     </div>
     <div className='faqbtn'>
         <button>Contact Us</button>
     </div>
 </div>
 </>
  )
}

export default Faq