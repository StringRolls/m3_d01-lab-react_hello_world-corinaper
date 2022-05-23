// import "../components/css/SectionIcon.css";



export default function SectionIcon(props) {
    return (
    <div className="iconsAndText">
        <img alt="" src={props.image}></img>
        <h3>{props.h3Text}</h3>
        <p>{props.paragraph}</p>
    </div>
    );
  }
