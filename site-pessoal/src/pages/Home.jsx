export default function Home({ setPaginaAtual, alternarTema }) {
  return (
    <>
      <div className="container">
        <span className="badge-subtitulo">SISTEMAS DE INFORMAÇÃO • CIN/UFPE</span>
        
        <div className="perfil-topo">
          <aside>
            <figure>
              <img src="malu.jpeg" alt="Maria Luiza" className="foto-perfil" />
            </figure>
          </aside>
          
          <main>
            <h1 className="titulo-hero">
              Maria Luiza de Paula <span className="destaque-serif">Portela</span>
            </h1>
            
            <p className="descricao-hero">
              Graduanda em Sistemas de Informação no Centro de Informática (CIn) da Universidade Federal de Pernambuco (UFPE).
            </p>
            
            <ul className="badge-lista">
              <li className="badge">Inglês Avançado</li>
              <li className="badge">Português Nativo</li>
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}