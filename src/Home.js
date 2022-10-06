import { Link } from "react-router-dom";
import Footer from "./component/Footer";
import Latest from "./component/Latest";
import Receipe from "./component/Receipe";
import Slider from "./component/Slider";

function Home() {
  return (
    <div>
      <Slider/>
      <Receipe/>
      <Latest/>
      <Footer/>
    </div>
  );
}

export default Home;
