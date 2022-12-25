import React, { useState } from "react";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/about.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';



function About() {
    const [open, setOpen] = useState(false);
return (
  <>
  <div id="vision">
   <h3 id="vision-h">About <a id='ven'>Venmar</a> School</h3>
			<a id='about-ven'>To provide learners with a safe and caring educational environment
                while focusing on competence based <p id='about-ven'>curriculumn integrated with technology thus helping
                the learners to uncover their great potential and talents.</p>
            </a>
            </div>
  <div id="cont">
  <div id="foo">
		</div>
        <div id="foo">
			<h6 id="visi">VISION</h6>
			<p id='mii'>Responsible lifelong learners and global citizens with leadership qualities</p>
			
			
		</div>
        <div id="foo">
			<h6 id="visi">MISSION</h6>
			<p id='mii'>Responsible lifelong learners and global citizens with leadership qualities</p>
			
		</div>
        <div id="foo">
			<h6 id="visi">VALUES</h6>
            <ul id='mii' type = "circle">
         <li id='mii'>Fear of God</li>
         <li id='mii'>Honesty and Integrity</li>
         <li id='mii'>Respect of Human Rights</li>
         <li id='mii'>Environment Consciousness</li>
         <li id='mii'>Team Work and Promotion of equality</li>
      </ul>
		</div>
        <div id="foo">
			<h6 id="visi">Learners</h6>
			  <ul  type = "circle">
         <li id='mii'>Inquirers</li>
         <li id='mii'>Thinkers</li>
         <li id='mii'>Knowledgeable</li>
         <li id='mii'>Communication</li>
         <li id='mii'>Open Minded and Respectful Citizens</li>
      </ul>
            
			
		</div>
        </div>
    <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
       <Card className="text-center" style={{ width: '18rem' }}>
      <Card.Img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
 
    <Footer />
    </>
  );
}

export default About;
