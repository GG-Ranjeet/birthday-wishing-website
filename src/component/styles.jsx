// Simple inline styles – you can move these to a CSS file
const styles = {
  container: {
    height: '300vh', // 3 pages * 100vh
    pointerEvents: 'none', // allow clicks to pass through to canvas if needed, but we have button
  },
  section: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(8px)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '600px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    pointerEvents: 'auto', // enable interaction on the card
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