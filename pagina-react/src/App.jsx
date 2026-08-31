import './App.css'

export default function App() {
  return (
    <div className="page-wrapper">
      <header className="header-top">
        <h1>APRENDENDO REACT PARA DESENVOLVIMENTO WEB</h1>
        <nav className="nav-menu">
          <a href="#home">HOME</a>
          <a href="#livros">LIVROS</a>
          <a href="#videos">VÍDEOS</a>
          <a href="#contatos">CONTATOS</a>
        </nav>
      </header>

      
      <div className="content-container">
        
        
        <section id="home">
          <h2 className="section-title">Introdução</h2>
          <p className="texto-intro">
            Com o React, você cria interfaces organizadas em componentes reutilizáveis, que controlam tanto a exibição quanto o comportamento da aplicação. Ele permite atualizar elementos de forma dinâmica, sem recarregar a página inteira, além de facilitar a aplicação de estilos, animações e recursos interativos de maneira escalável.
          </p>
          <p className="texto-intro">
            O React é uma das bibliotecas mais populares do ecossistema JavaScript e tornou-se referência no desenvolvimento de interfaces modernas. Sua principal força está na criação de componentes reutilizáveis, que tornam o código mais organizado e facilitam a construção de aplicações escaláveis e de fácil manutenção.
          </p>
        </section>

        
        <section id="livros">
          <h2 className="section-title">Livros</h2>
          <div className="grid-livros">
            <div className="livro-card">
              <img src="/capa 1.jpg" alt="Learning Web Design" className="imagem-capa" />
            </div>
            <div className="livro-card">
              <img src="/capa 2.jpg" alt="Construindo sites com CSS e (X)HTML" className="imagem-capa" />
            </div>
            <div className="livro-card">
              <img src="/capa 3.jpg" alt="JavaScript Guia do Programador" className="imagem-capa" />
            </div>
          </div>
        </section>

        
        <section id="videos" className="midia-box">
          <h2 className="section-title">Aprenda REACT na FEI</h2>
          
          <iframe 
            className="iframe-media"
            src="https://www.youtube.com/embed/4MHAOPxcnsQ" 
            title="FEI - Há 80 anos formando os profissionais do futuro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <iframe 
            className="iframe-media"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29220.51907980992!2d-46.58298882232082!3d-23.727227495007437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfei!5e0!3m2!1spt-BR!2sbr!4v1787619421012!5m2!1spt-BR!2sbr" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Mapa FEI"
          ></iframe>
        </section>

        
        <section id="contatos" className="contatos-section">
          <h2 className="titulo-contatos">Contatos</h2>

          <table className="tabela-contatos">
            <thead>
              <tr>
                <th>Nome</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prof. Dr. Isaac</td>
                <td>isaacjesus@fei.edu.br</td>
              </tr>
            </tbody>
          </table>

          <div className="bloco-amarelo">
            <p className="titulo-consulta">Sites para consulta:</p>
            <ul className="lista-consulta">
              <li>
                <span className="label-link">• REACT -</span>
                <a href="https://www.w3schools.com/REACT/" target="_blank" rel="noreferrer">
                  https://www.w3schools.com/REACT/
                </a>
              </li>
              <li>
                <span className="label-link">• HTML -</span>
                <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer">
                  https://www.w3schools.com/html/
                </a>
              </li>
              <li>
                <span className="label-link">• CSS -</span>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                  https://www.w3schools.com/css/
                </a>
              </li>
              <li>
                <span className="label-link">• JavaScript -</span>
                <a href="https://www.w3schools.com/js/" target="_blank" rel="noreferrer">
                  https://www.w3schools.com/js/
                </a>
              </li>
            </ul>
          </div>
        </section>

      </div>

      
      <footer className="faixa-rodape">
        <div className="box-logo">
          <img src="/html.png" alt="Logo HTML5" className="logo-rodape" />
        </div>
        
        <div className="texto-rodape">
          <p className="mensagem-semestre">Desejamos um excelente semestre a todos.</p>
          <p className="fonte-info">(Fonte Usada: Comic Sans MS, tamanho 15pt)</p>
        </div>

        <div className="box-logo">
          <img src="/css.png" alt="Logo CSS3" className="logo-rodape" />
        </div>
      </footer>
    </div>
  )
}