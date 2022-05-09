import "./style.css";

export default function Sidebar() {
  const sidebarProfile = {
    profileimg: "../../../assets/img/catanacomics.svg",
    profilename: "catanacomics",
    profilesurname: "Catana"
  };
  const sugestions = [
    {
      sugestionimg: "../../../assets/img/bad.vibes.memes.svg",
      sugestionname: "bad.vibes.memes"
    },
    { sugestionimg: "../../../assets/img/chibirdart.svg", sugestionname: "chibirdart" },
    {
      sugestionimg: "../../../assets/img/razoesparaacreditar.svg",
      sugestionname: "razoesparaacreditar"
    },
    {
      sugestionimg: "../../../assets/img/adorable_animals.svg",
      sugestionname: "adorable_animals"
    },
    {
      sugestionimg: "../../../assets/img/smallcutecats.svg",
      sugestionname: "smallcutecats"
    }
  ];

  return (
    <div className="sidebar">
      <Profile
        profileimg={sidebarProfile.profileimg}
        profilename={sidebarProfile.profilename}
        profilesurname={sidebarProfile.profilesurname}
      />

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestions.map((sugestion) => {
          return (
            <Sugestions
              sugestionimg={sugestion.sugestionimg}
              sugestionname={sugestion.sugestionname}
            />
          );
        })}
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
function Profile(props) {
  return (
    <div className="usuario">
      <img src={props.profileimg} />
      <div className="texto">
        <strong>{props.profilename}</strong>
        {props.profilesurname}
      </div>
    </div>
  );
}
function Sugestions(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.sugestionimg} />
        <div className="texto">
          <div className="nome">{props.sugestionname}</div>
          <div className="razao">Segue você</div>
        </div>
        <div className="seguir">Seguir</div>
      </div>
    </div>
  );
}
