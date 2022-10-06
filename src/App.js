import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Receipes from './routing/Receipes';
import Menu from './routing/Menu';
import Home1 from './routing/Home1';
import Ourteam from './routing/Ourteam';
import Home2 from './routing/Home2';
import Home3 from './routing/Home3';
import Home4 from './routing/Home4';
import Behind from './routing/Behind';
import Aboutus from './routing/Aboutus';
import Bloglist from './routing/Bloglist';
import Bloglist1 from './routing/Bloglist1';
import Bloglist2 from './routing/Bloglist2';
import Bloggrid from './routing/Bloggrid';
import Blogclassic from './routing/Blogclassic';


// import Contact from "./Contact"


// https://preview.themeforest.net/item/poco-fast-food-restaurant-wordpress-theme/full_screen_preview/28465454?clickid=y1wwIoz7lxyITC3RYd0DF251UkDUxIzuF2zY1M0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius

// https://preview.themeforest.net/item/tinysalt-personal-food-blog-wordpress-theme/full_screen_preview/26294668?_ga=2.72916497.383649810.1660366047-791361641.1634641706


// https://preview.themeforest.net/item/caverta-fine-dining-restaurant-wordpress-theme/full_screen_preview/22016826?clickid=y1wwIoz7lxyITC3RYd0DF251UkDUxN2OF2zY1M0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius

function App() {
  return (
    <>        
    <Header />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/receipes" element={ <Receipes/> } />
        <Route path="/Ourteam" element={ <Ourteam/>} />
        <Route path='/Menu' element={ <Menu/>} />
        <Route path='/Home1' element={ <Home1/>} />
        <Route path='/Home2' element={ <Home2/>} />
        <Route path='/Home3' element={ <Home3/>} />
        <Route path='/Home4' element={ <Home4/>} />
        <Route path='/Behind' element={ <Behind/>} />
        <Route path='/Aboutus' element={ <Aboutus/>} />
        <Route path='/Bloglist' element={ <Bloglist/>} />
        <Route path='/Bloglist1' element={ <Bloglist1/>} />
        <Route path='/Bloglist2' element={ <Bloglist2/>} />
        <Route path='/Bloggrid' element={ <Bloggrid/>} />
        <Route path='/Blogclassic' element={ <Blogclassic/>} />
      </Routes>
    </>


  )
}

export default App;
