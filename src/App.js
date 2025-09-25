import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background" />
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
