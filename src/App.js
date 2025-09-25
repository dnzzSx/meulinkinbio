import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;

      setBackgroundPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div
        className="background"
        style={{
          transform: `translate(${backgroundPosition.x}px, ${backgroundPosition.y}px)`,
        }}
      />
      <header className="App-header">
        <img src="profile.jpg" className="profile-img" alt="profile" />
        <h1>Lacerda.tattoo</h1>
        <p>Tatuador : Geek / autoral • Arte em todas as peles</p>
        <a
          className="App-link"
          href="https://www.instagram.com/direct/t/106649344068447/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende sua tatuagem
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/lacerda.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu Instagram
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/lacerda.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;