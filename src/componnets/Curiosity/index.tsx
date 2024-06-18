import "./style.css";

function curiosity() {
  return (
    <section id="section-curiosity" className="box-default">
      <h1 className="h1-default">Curiosidades sobre as game jams</h1>
      <h2  className="h2-default">
        As Game Jams são eventos fascinantes no mundo dos jogos, repletos de
        curiosidades interessantes. Aqui estão algumas delas:
      </h2>
      <div>
        <div className="div-curiosity">
          <div>
            <h3 className="h3-default">1.Origem Criativa:</h3>
            <p className="p-default">
              A primeira Game Jam conhecida foi a Ludum Dare, que começou em
              2002. Desde então, muitos outros eventos similares surgiram pelo
              mundo.
            </p>
          </div>
          <div>
            <h3 className="h3-default">2.Jogos Inovadores:</h3>
            <p className="p-default">
              {" "}
              Muitos jogos populares começaram como projetos em Game Jams.
              Exemplos notáveis incluem "Superhot" e "Papers, Please", que
              ganharam reconhecimento mundial após serem desenvolvidos
              inicialmente em Game Jams.
            </p>
          </div>
          <div>
            <h3 className="h3-default">3.Impacto Cultural:</h3>
            <p className="p-default">
              {" "}
              Game Jams não apenas impulsionam a inovação no design de jogos,
              mas também influenciam a cultura gamer e a indústria de
              desenvolvimento de jogos como um todo, destacando novos talentos e
              ideias.
            </p>
          </div>
          <div>
            <h3 className="h3-default">4.Comunidades Vibrantes:</h3>
            <p className="p-default">
              Participar de uma Game Jam não é apenas uma experiência isolada.
              Existem comunidades online e offline dedicadas a compartilhar
              experiências, feedback e apoio entre os participantes de Game Jams
              ao redor do mundo.
            </p>
          </div>
        </div>
          <h2 className="h2-default">Jogos que se posularizaram através das game jams</h2>
          <div className="div-games">
            <div>
              <p className="p-default"><p className="p-title">Superhot:</p>
                 Um jogo de tiro em primeira pessoa onde o tempo só
                avança quando o jogador se move. Foi desenvolvido inicialmente
                para a 7 Day FPS Game Jam em 2013 e ganhou bastante
                reconhecimento.
              </p>
              <img src="https://i.ytimg.com/vi/1E1wUkezp5I/hqdefault.jpg" width={240} height={240}  alt="" />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.Z8UpBY3B4f_igns09hUnYgAAAA?rs=1&pid=ImgDetMain"width={240} height={240} alt="" />
                <p className="p-default"><p className="p-title">Hotline Miami:</p> Um jogo de ação frenético com uma estética retro e jogabilidade rápida. Embora não tenha sido criado diretamente em uma Game Jam, seu conceito e protótipos iniciais foram explorados em eventos de desenvolvimento de jogos.

                </p>


            </div>
            <div>
                <p className="p-default"><p className="p-title" >Keep Talking and Nobody Explodes:</p>Keep Talking and Nobody Explodes: Um jogo multiplayer cooperativo onde um jogador desarma uma bomba com a ajuda de outros jogadores que têm um manual de instruções. Foi criado para a Global Game Jam de 2014.

                </p >
                <img src="https://th.bing.com/th/id/OIP.K3ifX16RCK1FfvTHiXnqnAAAAA?w=276&h=180&c=7&r=0&o=5&pid=1.7" width={240} height={240} alt="" />
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.J-kMkC4kyiXGnJbTnha_KwAAAA?w=322&h=180&c=7&r=0&o=5&pid=1.7"width={240} height={240} alt="" />
                <p className="p-default"><p className="p-title">The Stanley Parable:</p> Um jogo de exploração narrativa onde o jogador assume o papel de Stanley, um funcionário de escritório cujas ações são narradas por uma voz misteriosa. O protótipo inicial foi desenvolvido para a Global Game Jam de 2011.</p>


            </div>
            <div>
                <p  className="p-default"><p className="p-title">Slender:</p> The Eight Pages: Um jogo de terror em primeira pessoa onde o jogador explora uma floresta à noite enquanto tenta coletar oito páginas, tudo isso enquanto é perseguido por uma entidade assustadora. Foi criado para a Unity3D Horror Game Challenge de 2012.</p>
                <img src="https://th.bing.com/th/id/OIP.zoXD7fqsJzuPxyQey4iDFgHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7"width={240} height={240} alt="" />


            </div>
          </div>
          <h2>Achou o mundo das Game jams incrivel?</h2>
          <h2>então não perca a oportunidade. venha e se casdatre agora e tenha uma experiencia unica!!!! </h2>
          <button type="button" className='button-default'><a href="#section-form">Estamos te esperando!!</a></button>
      </div>
    </section>
  );
}

export default curiosity;
