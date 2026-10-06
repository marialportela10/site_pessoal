import { useState } from 'react'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Portfolio from './pages/Portfolio'
import './App.css'

const pages = [
  { file: 'index.html', label: 'Home', component: Home },
  { file: 'sobre.html', label: 'Sobre', component: Sobre },
  { file: 'projetos.html', label: 'Projetos', component: Portfolio },
]

export default function App() {
  const current = pages.find(page => location.pathname.endsWith(page.file)) || pages[0]
  const Page = current.component
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    setTheme(next)
    try { localStorage.setItem('mlpp-theme', next) } catch { /* Theme remains usable without storage. */ }
  }
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header">
      <a className="wordmark" href="./index.html" aria-label="MLPP — página inicial">MLPP<span>✦</span></a>
      <nav aria-label="Navegação principal">{pages.map(page => <a key={page.file} href={`./${page.file}`} aria-current={current === page ? 'page' : undefined}>{page.label}</a>)}</nav>
      <button className="theme-toggle" onClick={toggleTheme} aria-label={`Ativar modo ${theme === 'light' ? 'escuro' : 'claro'}`} aria-pressed={theme === 'dark'}><span aria-hidden="true">{theme === 'light' ? '◐' : '☀'}</span><span>{theme === 'light' ? 'Escuro' : 'Claro'}</span></button>
    </header>
    <main id="conteudo" className="page-shell"><Page /></main>
    <footer id="contato" className="site-footer">
      <div className="footer-top"><div><p className="eyebrow">CONTATO / VAMOS CONVERSAR</p><h2>Boas ideias começam<br />com uma <em>conversa.</em></h2></div><a className="button" href="mailto:marial.portela10@gmail.com">Me mande um e-mail <span aria-hidden="true">→</span></a></div>
      <div className="contact-grid"><a href="mailto:mlpp@cin.ufpe.br"><span>Acadêmico</span>mlpp@cin.ufpe.br →</a><a href="mailto:marial.portela10@gmail.com"><span>Pessoal</span>marial.portela10@gmail.com →</a><a href="https://www.linkedin.com/in/maria-luiza-portela" target="_blank" rel="noopener noreferrer"><span>Conexões</span>LinkedIn →</a><a href="https://github.com/marialportela10" target="_blank" rel="noopener noreferrer"><span>Código</span>GitHub →</a></div>
      <div className="footer-bottom"><a className="wordmark" href="./index.html">MLPP<span>✦</span></a><span>Maria Luiza de Paula Portela · Recife, PE</span><span>Tecnologia com olhar humano.</span></div>
    </footer>
  </>
}
