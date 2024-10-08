import React from 'react'

export default function FooterComp() {
  return (
    <div style={{padding: 40, background: 'rgb(0, 3, 15)'}}>
  <div style={{display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
            <h1 style={{fontSize: 20, margin: 0}}>
                Get in touch 
            </h1>
            <h1 style={{fontSize: 20, margin: 0}}>
                with Prod
            </h1>
            <h2 style={{fontSize: 13, cursor: 'pointer'}}>Contact</h2>
        </div>

        <div>
            <h2>066 402 0596</h2>
            <h2>mihail.zhirok@gmail.com</h2>
        </div>
        <div>
            <div>
                <a style={{color: 'white', marginRight: 10}} href="#">Linkedin</a>
                <a style={{color: 'white', marginRight: 10}} href="#">Instagram</a>
            </div>
            <h1>Dnipro, Mossacovscogo 13A</h1>
            <h1>Ukraine</h1>

        </div>
    </div>
    </div>
  
  )
}
