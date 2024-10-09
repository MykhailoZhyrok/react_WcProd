import React from 'react'
import LikesSecrion from './Sections/LikesSecrion'
import TeamSection from './Sections/TeamSection'
import VacationSection from './Sections/VacationSection'
import MeetSection from './Sections/MeetSection'
import FooterComp from '../FooterComp'
import './Main.css'

export default function Main() {
  return (
    <div >
      <div className='mainText'>
        <div className='textCont' >
          <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 7vw, 5.75rem)' }}>Performance marketing for superior results.</h1>
        </div>

        <div className='imgCont'>
          <img style={{ width: '100%', minWidth: 200 }} src="https://i.ibb.co/99S7NWp/main-city.jpg" alt='City view' />
        </div>
      </div>

      <div style={{ maxWidth: '500px', marginLeft: '40px', marginTop: '20px', flex: '1 1 100%' }}>
        <h2 style={{ backgroundColor: 'black', color: 'white', fontSize: '20px' }}>About us</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '100%', width: '50%', minWidth: 241 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit minima tenetur quibusdam distinctio doloribus ipsam, sed pariatur voluptatibus magni nesciunt obcaecati similique esse vitae, itaque error, aut doloremque quia.
            </p>
          </div>
          <div style={{ maxWidth: '100%', width: '50%', minWidth: 241 }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit minima tenetur quibusdam distinctio doloribus ipsam, sed pariatur voluptatibus magni nesciunt obcaecati similique esse vitae, itaque error, aut doloremque quia.
            </p>
          </div>


        </div>
      </div>

      <section style={{ display: 'block', justifyContent: 'center', padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '14px' }}>Why The MyPetProd</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: 'clamp(1.5rem, 5vw, 40px)', margin: 0 }}>
            You've never experienced a partnership like ours — we assure you of that. Whether it's achieving better results, simplifying your tasks, building stronger trust, or all of the above, we are eager to demonstrate what genuine partnerships can accomplish.
          </p>
        </div>
      </section>

      {/* <Carousel/> */}
      <MeetSection />
      <LikesSecrion />
      <TeamSection />
      <VacationSection />
      <FooterComp />

    </div>
  )
}
