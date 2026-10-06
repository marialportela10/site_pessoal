import { useState } from 'react';

function Carrossel({ imagens, titulo }) {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
    };

    const proximo = () => {
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carrossel" role="region" aria-label={`Galeria de ${titulo}`} onKeyDown={event => { if (event.key === 'ArrowLeft') anterior(); if (event.key === 'ArrowRight') proximo(); }}>
            <button 
            type="button" 
            className="btn-carrossel prev" 
            onClick={anterior} 
            aria-label="Imagem anterior"
            >
            &#10094;
            </button>

            <div className="carrossel-container">
            <img
            src={imagens[indiceAtual]}
                alt={`${titulo} — imagem ${indiceAtual + 1} de ${imagens.length}`}
                className="slide active"
            />
            </div>

            <button 
            type="button" 
            className="btn-carrossel next" 
            onClick={proximo} 
            aria-label="Próxima imagem"
            >
            &#10095;
            </button>
            <div className="carousel-progress"><span aria-live="polite">{String(indiceAtual + 1).padStart(2, '0')} / {String(imagens.length).padStart(2, '0')}</span><div className="carousel-dots">{imagens.map((imagem, index) => <button key={imagem} type="button" aria-label={`Ver imagem ${index + 1} de ${titulo}`} aria-pressed={index === indiceAtual} onClick={() => setIndiceAtual(index)} />)}</div><span>USE AS SETAS ← →</span></div>
        </div>
    );
}

export default function Portfolio() {
const imagensmapeia = [
'./mapeia/pagina1.jpg',
'./mapeia/pagina2.jpg',
'./mapeia/pagina3.jpg',
'./mapeia/pagina4.jpg',
'./mapeia/pagina5.jpg',
'./mapeia/pagina6.jpg',
'./mapeia/pagina7.jpg',
'./mapeia/pagina8.jpg'
];

const imagensouroecachaca = [
'./ouroecachaca/pagina1.jpg',
'./ouroecachaca/pagina2.jpg',
'./ouroecachaca/pagina3.jpg',
'./ouroecachaca/pagina4.jpg',
'./ouroecachaca/pagina5.jpg',
'./ouroecachaca/pagina6.jpg',
'./ouroecachaca/pagina7.jpg',
'./ouroecachaca/pagina8.jpg',
'./ouroecachaca/pagina9.jpg',
'./ouroecachaca/pagina10.jpg',
'./ouroecachaca/pagina11.jpg',
'./ouroecachaca/pagina12.jpg'
];

const imagensthebunker = [
'./the-bunker/pagina (1).jpg',
'./the-bunker/pagina (2).jpg',
'./the-bunker/pagina (3).jpg',
'./the-bunker/pagina (4).jpg',
'./the-bunker/pagina (5).jpg',
'./the-bunker/pagina (6).jpg',
'./the-bunker/pagina (7).jpg',
'./the-bunker/pagina (8).jpg',
'./the-bunker/pagina (9).jpg',
'./the-bunker/pagina (10).jpg'
];

const imagensantro = [
'./Antro/1.png',
'./Antro/2.png',
'./Antro/3.png',
'./Antro/4.png',
'./Antro/5.png',
'./Antro/6.png',
'./Antro/7.png'
];

return (
    <>

        <div className="pagina-sobre">
            <div className="projects-content">
                <article className="portfolio-artigo">
                <header>
                    <p className="eyebrow">02 / IDEIAS EM PRÁTICA</p><h1>Projetos com <em>propósito.</em></h1>
                </header>
                <section>
                    <p>
                    Aqui estão algumas das minhas produções acadêmicas e artísticas, incluindo trabalhos de programação, design de jogos e artes plásticas. Cada projeto reflete meu interesse em tecnologia, criatividade e inovação.
                    </p>
                </section>
                </article>

                <article>
                <div className="project-heading"><span className="project-number">01</span><div><p className="eyebrow">GOVTECH / UX / IMPACTO SOCIAL</p><h2>Mapeia</h2></div><span aria-hidden="true">→</span></div>
                <Carrossel imagens={imagensmapeia} titulo="Mapeia" />
                <p>
                    Desenvolvido como projeto da disciplina de Concepção de Artefatos digitais, o Mapeia é uma plataforma GovTech baseada em um mapa colaborativo que funciona como um sensor territorial em tempo real. Conecta o monitoramento de field via crowdsourcing (realizado por cidadãos e movimentos sociais de base) à inteligência de dados públicos para identificar e georreferenciar casarões históricos ociosos e degradados no Centro do Recife.
                </p>
                <p>
                    Criado com o objetivo de unificar e cruzar dados de vacância fiscal com critérios de segurança estrutural por meio de algoritmos de triagem, eliminando a fragmentação de informações entre secretarias e cartórios. O sistema gera relatórios automatizados para identificar edificações seguras e aptas para conversão em Habitação de Interesse Social (HIS), combatendo o déficit habitacional.
                </p>
                <p>
                    <strong>Site:</strong>{' '}
                    <a href="https://mapeia.figma.site" target="_blank" rel="noopener noreferrer">
                    www.mapeia.figma.site
                    </a>
                </p>
                </article>

                <article>
                <div className="project-heading"><span className="project-number">02</span><div><p className="eyebrow">PYTHON / PYGAME / GAME DESIGN</p><h2>Ouro e Cachaça</h2></div><span aria-hidden="true">→</span></div>
                <Carrossel imagens={imagensouroecachaca} titulo="Ouro e Cachaça" />
                <p>
                    Desenvolvido como projeto da disciplina Introdução à Programação com o objetivo de botar em prática os conhecimentos aprendidos em sala, sendo desenvolvido inteiramente em Python, utilizando a biblioteca Pygame. O jogo mistura os gêneros de TCG, roguelike deckbuilder e terror psicológico para apresentar o lado sombrio do folclore brasileiro.
                </p>
                <p>
                    <strong>Github:</strong>{' '}
                    <a href="https://github.com/marialportela10/Ouro-e-Cachaca" target="_blank" rel="noopener noreferrer">
                    github.com/marialportela10/Ouro-e-Cachaca
                    </a>
                </p>
                </article>

                

                <article>
                <div className="project-heading"><span className="project-number">03</span><div><p className="eyebrow">JOGOS / TERROR / EXPERIÊNCIA 2D</p><h2>The Bunker</h2></div><span aria-hidden="true">→</span></div>
                <Carrossel imagens={imagensthebunker} titulo="The Bunker" />
                <p>
                    Desenvolvido para o processo seletivo da Liga Acadêmica de Jogos Eletrônicos (LAJE), The Bunker é uma experiência 2D single-player de terror psicológico e stealth. Na pele do personagem Damião, o jogador tem o objetivo de escapar de uma clínica macabra e conter o ritual de uma seita obscura. Através de uma interface 2D focada na exploração de cenários, o protótipo permite ao jogador coletar registros para desvendar a história, encontrar rotas de fuga e improvisar recursos e armas com itens do ambiente para sobreviver às ameaças.
                </p>
                <p>
                    <strong>Itch.io:</strong>{' '}
                    <a href="https://vica13.itch.io/the-bunker" target="_blank" rel="noopener noreferrer">
                    https://vica13.itch.io/the-bunker
                    </a>
                </p>
                </article>

                <article>
                <div className="project-heading"><span className="project-number">04</span><div><p className="eyebrow">C++ / ORIENTAÇÃO A OBJETOS / AGROECOLOGIA</p><h2>Antro</h2></div><span aria-hidden="true">→</span></div>
                <Carrossel imagens={imagensantro} titulo="Antro" />
                <p>
                    Sistema de gestão de encomendas para feiras agroecológicas, pensado para apoiar agricultores familiares na organização de pedidos antecipados e retirada na feira. A proposta substitui processos manuais dispersos em aplicativos de mensagens por um fluxo organizado de catálogo, reserva de produtos, separação e acompanhamento dos pedidos.
O projeto utiliza C++ e estruturas de dados da STL para modelar produtos, consumidores e pedidos. Entre os recursos previstos estão o processamento por ordem de chegada, o ajuste do valor conforme a pesagem real e a geração de uma lista consolidada para orientar a colheita.
                </p>
                <p>
                    <strong>GitHub:</strong>{' '}
                    <a href="https://github.com/joaobgdev/Antro" target="_blank" rel="noopener noreferrer">
                    https://github.com/joaobgdev/Antro
                    </a>
                </p>
                </article>

            </div>
        </div>
    </>
    );
}