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
      flexDirection: 'column',
      padding: '0 20px' // Додаємо padding для відступів на мобільних
    }}>
      <div style={{ paddingRight: '5vw' }}>
        <div style={{ maxWidth: 500 }}>
          <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            What’s The PetProd like?
          </h3>
        </div>
        <div style={{ maxWidth: 700 }}>
          <p style={{ fontSize: 'clamp(1.25rem, 5vw, 2.75rem)', margin: 0 }}>
            We admit it: We’re addicted to performance marketing. All of it. We created The Prod so we could use every bit of our collective experience, every day, to win as often as possible. We love winning — don’t you?
          </p>
        </div>
      </div>
    </section>
  );
}
