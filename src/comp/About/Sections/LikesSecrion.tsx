import React from 'react';

export default function LikesSection() {
  return (
    <section style={{
      background: 'rgb(0, 3, 15)', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column' 
    }}>
      <div style={{paddingRight: 80}}>

      
      <div style={{ maxWidth: 500 }}>
        <h3 style={{margin: 0}}>What’s The PetProd like?</h3>
      </div>
      <div style={{ maxWidth: 700 }}>
        <p style={{ fontSize: '2.75rem', margin: 0 }}>
          We admit it: We’re addicted to performance marketing. All of it. We created The Prod so we could use every bit of our collective experience, every day, to win as often as possible. We love winning — don’t you?
        </p>
      </div>
      </div>
    </section>
  );
}
