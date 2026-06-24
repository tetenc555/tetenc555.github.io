import "../css/Home.css";
import Fluttershy from "../assets/Home/Fluttershy.jpeg";
import SelectionBar from "../components/SelectionBar";

export default function Home() {
  return (
    <div className="main-page">
      <img src={Fluttershy} alt="Fluttershy" className="main-photo" />
      <p>Bem-vindo ao meu cantinho!</p>
      <p className="instructions">Acesse um dos meus links! :3</p>
      <SelectionBar />
    </div>
  );
}
