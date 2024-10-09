import React from 'react'
import MeetSection from '../About/Sections/MeetSection'
import FooterComp from '../FooterComp'
import './Contact.css'
export default function MainContact() {
  return (
    <div >
        <div   style={{ maxWidth: 500, padding: '60px 20px 20px 40px'}} >
          <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 7vw, 5.75rem)' }}>Say hi.</h1>
        </div>
        <div style={{paddingLeft: 40, paddingRight: 40}}>
          <div>
          <h4>
            Reach us
          </h4>
          </div>
          <div>
            <h1>+38 (0664) 020596</h1>
            <h1>Dnipro, Mossacovscogo 13A</h1>
            <h1>Ukraine</h1>

          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <a className='link' href="http://">Linkedin</a>
            <a className='link' href="http://">Instagram</a>
            <a className='link' href="http://">mihail.zhirok@gmail.com</a>
          </div>

        </div>
        <MeetSection/>
        <FooterComp/>

    </div>
  )
}
