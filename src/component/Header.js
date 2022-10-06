import '../App.css';
import './Header.css';
import '../css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


function Header()
{
    return(
        <>
            <header>
            <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
            <img width="220" height="49" style={{paddingRight:"80px" , width:"80%"}} class="custom-logo" alt="TinySalt" src="https://tinysalt.loftocean.com/wp-content/uploads/2020/04/studio-logo-3-1.svg"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5 ps-5 main">
                <li class="nav-item">
                <Link to="/">Home <i class="fa-solid fa-angle-down nav-i"></i></Link>
                  <ul className='sub'>
                    <li><a href="/Home1">Home 1</a></li>
                    <li><a href="/Home2">Home 2</a></li>
                    <li><a href="/Home3">Home 3</a></li>
                    <li><a href="/Home4">Home 4 Sushi</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                <Link to="/Menu">Menu</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">Pages<i class="fa-solid fa-angle-down nav-i"></i></a>
                  <ul className='sub'>
                    <li><a href="/">Top header</a></li>
                    <li><a href="/Aboutus">About us</a></li>
                    <li><a href="/Ourteam">Team</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link ">Blog<i class="fa-solid fa-angle-down nav-i"></i></a>
                  <ul className='sub'>
                    <li><a href="/Bloglist">Blog List</a></li>
                    <li><a href="/Bloggrid">Blog Grid 2 Cols</a></li>
                    <li><a href="/Blogclassic">Blog Classic</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                  <a href="/Aboutus">About Us</a>
                </li>
                <li class="nav-item">
                <Link to="/Ourteam">Our Team</Link>
                </li>
                </ul>
              <Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </header>
        </>
    );
}
export default Header;
