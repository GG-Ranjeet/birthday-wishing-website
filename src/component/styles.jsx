// Simple inline styles – you can move these to a CSS file
const styles = {
    container: {
        height: '300vh',
        pointerEvents: 'none',
    },
    section: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
    },
      lastCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',                // make card fill the section height
    width: '100%',                  // optional, ensures card uses full width
    maxWidth: '600px',               // keep same max width as before
    margin: '0 auto',                // center the card horizontally
  },
  // Keep your existing card style (without height) for other sections
  card: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(8px)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '600px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    pointerEvents: 'auto',
  },
    card: {
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        pointerEvents: 'auto',
    },
    title: {
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        margin: '0 0 20px 0',
        color: '#333',
    },
    subtitle: {
        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
        color: '#666',
        margin: 0,
    },
    button: {
        marginTop: '30px',
        padding: '12px 30px',
        fontSize: '1.2rem',
        background: '#ff6b6b',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },

};

export default styles;