import "./reset.css";
import "./style.css";
import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Posts from "./Posts";

export default function App() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>

          <div className="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>

          <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>

          <div className="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>

          <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div className="corpo">
        <div>
          <Stories />
          <Posts />
        </div>
        <div className="esquerda">
          <Sidebar />
        </div>
      </div>

      <div className="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}
