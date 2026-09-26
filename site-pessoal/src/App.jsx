import { useState } from 'react';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home');

  return (
    <>
      {/* O Header fica fora de qualquer container para ocupar 100% da largura da tela */}
      <header>
        <nav>
          <button 
            className={`btn-transparente ${paginaAtual === 'home' ? 'active' : ''}`} 
            onClick={() => setPaginaAtual('home')}
          >
            Início
          </button>
          <button 
            className={`btn-transparente ${paginaAtual === 'sobre' ? 'active' : ''}`} 
            onClick={() => setPaginaAtual('sobre')}
          >
            Sobre
          </button>
          <button 
            className={`btn-transparente ${paginaAtual === 'portfolio' ? 'active' : ''}`} 
            onClick={() => setPaginaAtual('portfolio')}
          >
            Portfólio
          </button>
        </nav>
      </header>

      {/* Apenas o conteúdo principal fica dentro do container centralizado */}
      <main className="container">
        {paginaAtual === 'home' && <Home setPaginaAtual={setPaginaAtual} />}
        {paginaAtual === 'sobre' && <Sobre />}
        {paginaAtual === 'portfolio' && <Portfolio />}
      </main>

      {/* O Footer também fica dentro do seu próprio container ou fora */}
      <footer className="container">
        <h3>Formas de contato:</h3>
        <p><strong>Email institucional:</strong> mlpp@cin.ufpe.br</p>
        <p><strong>Email pessoal:</strong> marial.portela10@gmail.com</p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/maria-luiza-portela" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/maria-luiza-portela
          </a>
        </p>
        <p>
          <strong>Github:</strong>{' '}
          <a href="https://github.com/marialportela10" target="_blank" rel="noopener noreferrer">
            github.com/marialportela10
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;