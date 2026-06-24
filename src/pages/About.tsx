import BackButton from "../components/BackButton";
import Twilight from "../assets/About/twilight.jpeg";
import Twilight2 from "../assets/About/twilight2.jpeg";
import "../css/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="main-page">
      <BackButton backUrl={"/home"} />
      <div className="img-section">
        <img src={Twilight} alt="Twilight" className="about-photo" />
        <img src={Twilight2} alt="Twilight" className="about-photo" />
      </div>
      <div className="about-text-box">
        <h3>Sobre mim ^.^</h3>
        <p>
          Sou uma estudante brasileira de 20 anos que gosta muito de aprender
          sobre programação e computadores em geral! No momento, estou focada em
          aprender Desenvolvimento de Jogos com GDScript/React.JS!
        </p>
      </div>
      <div className="interests-boxes">
        <div className="interests-box">
          <h3>Gosto de:</h3>
          <ul>
            <li>Celulares</li>
            <li>React.JS</li>
            <li>Namorada</li>
            <li>iPhone 4s Branco</li>
          </ul>
        </div>
        <div className="interests-box">
          <h3>Não gosto de:</h3>
          <ul>
            <li>LG Joy</li>
            <li>Derrubarem meu joycon</li>
            <li>Rinite Alérgica</li>
            <li>iPhone 14</li>
          </ul>
        </div>
      </div>
      <Link to={"/social"}>
        <button className="normal-button about-button">
          Me stalkeie aqui!
        </button>
      </Link>
    </div>
  );
}
