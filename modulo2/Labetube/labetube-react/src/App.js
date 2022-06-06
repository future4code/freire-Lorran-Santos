import "./App.css";
import logo from "./img/logo-youtube.png";
import menu from "./img/menu.png";
import lupa from "./img/lupa.png";
import perfil from "./img/perfil.png";
import home from "./img/home.png";
import inscricao from "./img/inscricao.png";
import alta from "./img/em-alta.png";
import original from "./img/original.png";
import historico from "./img/historico.png";

function App() {
  const titulo = "Titulo do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <div className="header-logo-nome">
            <img src={menu} className="menu" alt="menu" />
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-titulo">LabTube</h1>
          </div>
          <div className="pesquisa">
            <input type="text" placeholder="Busca" className="campoDeBusca" />
            <button className="botaoPesquisa">
              <img src={lupa} />
            </button>
          </div>
          <img src={perfil} className="perfil" alt="perfil" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">
                <img src={home} alt="home" />
                Início
              </li>
              <li className="botoes-meunu-vertical">
                <img src={alta} alt="em alta" />
                Em alta
              </li>
              <li className="botoes-meunu-vertical">
                <img src={inscricao} alt="inscrição" />
                Inscrições
              </li>
              <hr />
              <li className="botoes-meunu-vertical">
                <img src={original} alt="original" />
                Originais
              </li>
              <li className="botoes-meunu-vertical">
                <img src={historico} alt="histórico" />
                Histórico
              </li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div
              className="box-pagina-principal media1"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div
              className="box-pagina-principal media2"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div
              className="box-pagina-principal media3"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div
              className="box-pagina-principal media4"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div
              className="box-pagina-principal media5"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div
              className="box-pagina-principal media6"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div
              className="box-pagina-principal media7"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div
              className="box-pagina-principal media8"
              onClick={reproduzVideo}
            >
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
