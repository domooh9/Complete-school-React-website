import React from 'react'
import { Icon } from '@iconify/react';
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'; 
import './App.css'
import Home from './components/Home'
import Post from './components/Post'
import Inquiries from './components/Inquiries';
// import Footer from './components/Footer'

function App() {
 

  return (
    <>
    
  <Navbar className="nav-bar" fixed="top" collapseOnSelect expand="lg" bg="blue" >
    <div>
  <h4><p id="hon">VENMAR SCHOOL KISUMU</p><p className='heade'><i>Today's Learners Tomorrow's Leaders</i>
            </p></h4> 
            </div>
          
        <Container>  
        <Icon className='ion' icon="bi:telephone-fill" />
        <Icon className='ionn' icon="logos:whatsapp-icon" />
          {/* <Navbar.Brand id="home"href="/"><p id="hom">VENMAR SCHOOL KISUMU </p>
           <p className='header'><i>Today's Learners Tomorrow's Leaders</i>
            </p></Navbar.Brand>  */}
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link id="ho" className="me-aut" href="/">Home</Nav.Link>  
            <Nav.Link className="me-aut" href="/post">About</Nav.Link>  
              <Nav.Link className="me-aut" href="#pricing">Contact</Nav.Link> 
              <NavDropdown className="me-aut" title="Programmes" id="collasible-nav-dropdown"> 
              <div className='nav-dropdown'>
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Community development</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">fee structure</NavDropdown.Item>  
                </div> 
              </NavDropdown>  
              {/* <i class="bi bi-telephone"></i> */}
            </Nav>  
            <Nav>  
              <Nav.Link href="/inquiries" className="box">  Inquiries</Nav.Link>  
              <Nav.Link className="box" eventKey={2} href="#memes">  
             Admissions 
              </Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post' element={<Post />} />
      <Route path='/inquiries' element={<Inquiries />} />
    </Routes>

    </>
  
 )
}

export default App
