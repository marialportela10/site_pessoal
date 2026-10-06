export default function Home() {
  return <>
    <div className="edition"><span>PORTFÓLIO PESSOAL / MLPP</span><span>RECIFE, PERNAMBUCO →</span></div>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">SISTEMAS DE INFORMAÇÃO · CIN / UFPE</p><h1>Maria Luiza<br />de Paula<br /><em>Portela.</em><span className="hero-star" aria-hidden="true">✦</span></h1><p className="hero-intro">Entre tecnologia, pessoas<br />e possibilidades.</p><p>Graduanda em Sistemas de Informação no Centro de Informática da Universidade Federal de Pernambuco. Um olhar criativo para produtos digitais, cibersegurança e jogos.</p><div className="hero-actions"><a className="button" href="./projetos.html">Explore meus projetos →</a><a className="text-link" href="./sobre.html">Mais sobre mim →</a></div></div>
      <figure className="portrait"><div className="portrait-frame"><img src="./malu.jpeg" alt="Maria Luiza de Paula Portela" /><span className="portrait-stamp">CRIATIVIDADE<br />ENCONTRA<br />TECNOLOGIA ✦</span></div><figcaption><span>01 / UM POUCO DE MIM</span><span>Em constante construção.</span></figcaption></figure>
    </section>
    <div className="interest-strip"><span>PRODUTO & PESSOAS</span><span aria-hidden="true">✦</span><span>CIBERSEGURANÇA</span><span aria-hidden="true">✦</span><span>DESIGN & JOGOS</span></div>
    <section className="home-note"><p className="eyebrow">CURIOSIDADE COMO PONTO DE PARTIDA</p><h2>Uma mente analítica.<br />Um olhar <em>criativo.</em></h2><div><p>Da lógica de programação às artes plásticas, gosto de explorar como ideias se transformam em experiências. Aprender, criar e colaborar fazem parte desse caminho.</p><ul className="badge-lista"><li className="badge">Português nativo</li><li className="badge">Inglês avançado</li></ul><a className="text-link" href="./sobre.html">Conheça minha trajetória →</a></div></section>
  </>
}
