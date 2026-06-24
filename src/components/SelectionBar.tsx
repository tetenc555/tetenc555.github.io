import { Link } from "react-router-dom";
import PinkiePie from "../assets/Home/PinkiePie.jpeg";
import wifi from "../assets/Home/wifi.jpeg";
import iPhone from "../assets/Home/iphone.jpeg";
import "../css/SelectionBar.css";
export default function SelectionBar() {
  return (
    <div className="selection-bar">
      <Link className="nav-link" to="/sobre">
        <img className="nav-icon" src={PinkiePie} alt="Pinkie Pie" />
        <p>Sobre</p>
      </Link>
      <Link className="nav-link" to="/iphones">
        <img className="nav-icon" src={iPhone} alt="iPhones" />
        <p>iPhones</p>
      </Link>
      <Link className="nav-link social-media" to="/social">
        <img className="nav-icon" src={wifi} alt="Social Media Icon" />
        <p>Social</p>
      </Link>
    </div>
  );
}
