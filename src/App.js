import "./assets/css/reset.css";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

export default function App() {
  return (
    <div>
      <Navbar />
      <Body />
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
