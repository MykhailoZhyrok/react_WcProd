import React from 'react'
import LikesSecrion from './Sections/LikesSecrion'
import TeamSection from './Sections/TeamSection'
import VacationSection from './Sections/VacationSection'
import MeetSection from './Sections/MeetSection'
import FooterComp from '../FooterComp'

export default function Main() {
  return (
    <div >
      <div style={{ padding: '60px 20px 20px 40px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 500 }}>
          <h1 style={{ margin: 0, fontSize: '5.75rem' }}>Performance marketing for superior results.</h1>
        </div>
        <div style={{ padding: 20, width: '100%', maxWidth: '385px', marginRight: '50px' }}>
          <img style={{ width: '100%', minWidth: 200 }} src="https://i.ibb.co/99S7NWp/main-city.jpg" alt='City view' />
        </div>

      </div>

      <div style={{ width: 500, marginLeft: 40 }}>
        <h2 style={{ backgroundColor: 'black', color: 'white', fontSize: 20 }}>About us</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ width: '50%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit minima tenetur quibusdam distinctio doloribus ipsam, sed pariatur voluptatibus magni nesciunt obcaecati similique esse vitae, itaque error, aut doloremque quia.</p>
          <p style={{ width: '50%' }}>lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit minima tenetur quibusdam distinctio doloribus ipsam, sed pariatur voluptatibus magni nesciunt obcaecati similique esse vitae, itaque error, aut doloremque quia.</p>

        </div>
      </div>


      <section style={{ display: 'block', justifyContent: 'center', padding: 80 }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 14 }}>
            Why The MyPetProd
          </h2>
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 40, margin: 0 }}>
            You've never experienced a partnership like ours — we assure you of that. Whether it's achieving better results, simplifying your tasks, building stronger trust, or all of the above, we are eager to demonstrate what genuine partnerships can accomplish.
          </p>
        </div>
      </section>

      {/* <Carousel/> */}
      <MeetSection/>
      <LikesSecrion/>
      <TeamSection/>
      <VacationSection/>
      <FooterComp/>

    </div>
  )
}
