import "../components/css/Main.css";
import logo from '../images/ironhack-logo-xs.png'
import menuIcon from "../images/menu-top-xs.png"


export default function Main(props) {
    return (
    <div className="backgroundColor">
    <nav className="navbar">
        <img src={logo} alt="logo" />
        <img src={menuIcon} alt="logo" />
         
     </nav>
     <main className="main">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        {props.children}
     </main>

     </div>
    );
  }

 
  