import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'; 
import './App.css'
import Home from './components/Home'
import Post from './components/Post'
// import Inquiries from './components/Inquiries';
// import Footer from './components/Footer'

function App() {
 

  return (
    <>
    {/* <nav className="navbar navbar-default" role="navigation"> */}
{/* <div className="navbar-header">

<ul> */}
        {/* <li>
        <Link to="/">Home</Link>
        </li>
        <li>
    <Link to="/post">Post</Link>
        </li>
        </ul> 
      </div>
    </nav> */}
  <Navbar className="nav-bar" fixed="top" collapseOnSelect expand="lg" bg="blue" >  
        <Container>  
          <Navbar.Brand id="home"href="/"><p id="hom">VENMAR SCHOOL KISUMU </p>
           <p className='header'><i>Today's Learners Tomorrow's Leaders</i>
            </p></Navbar.Brand> 
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link id="ho" className="me-aut" href="/">Home</Nav.Link>  
            <Nav.Link className="me-aut" href="/post">About</Nav.Link>  
              <Nav.Link className="me-aut" href="#pricing">Contact Us</Nav.Link> 
              <NavDropdown className="me-aut" title="Programmes" id="collasible-nav-dropdown"> 
              <div className='nav-dropdown'>
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Community development</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">fee structure</NavDropdown.Item>  
                </div> 
              </NavDropdown>  
            </Nav>  
            <Nav>  
              <Nav.Link href="/inquiries"><button className="box" >Inquiries</button></Nav.Link>  
              <Nav.Link  eventKey={2} href="#memes">  
             <button className="box" >Admissions</button>  
              </Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post' element={<Post />} />
      {/* <Route path='/inquiries' element={<Inquiries />} /> */}
    </Routes>
{/* <Footer /> */}
    </>
 )
}

export default App
