import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Image, Button } from 'react-bootstrap';
import Footer from "./Footer";
 import './styles/Home.css'

function Home() {
  return (
<div>
<div id="slid" className="slider" style={{ display: 'block', width: '100%', marginBottom: '1500px' }}>
       <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Image One"
          />
          <Carousel.Caption>
           <h1 id="image-one-text"><b>Venmar Primary School-Kisumu</b></h1>
            <h3><p><em id="image-one-tex">Extra curriculumn activities</em></p></h3>
            <button className='btn'>Learn more</button> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80"
            alt="Image Two"
          />
          <Carousel.Caption>
          <h1 id="image-one-text"><b>Venmar Primary School-Kisumu</b></h1>
            <h3><p><em id="image-one-tex">Today Learners Tomorrow Leaders</em></p></h3>
            <button className='btn'>Admissions Inquiry</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="containe">
  
      <Card style={{ width: '90%', border: 'none', background: 'inherit', marginLeft: '40px'}}>
      <Card.Body>
        <Image id="btt" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd258p9phuj1g33CTjG3T_SO-sKBvwRy7k0A&usqp=CAU" alt="Card image" />
        <Card.Text>
        <h1 style={{ font: '14px'}}><p id="pp">Welcome to Venmar</p> <a  className="pppip"> School </a></h1>
   {/* <h7 className="text-center"><i>Today's Learners Tomorrows's Leaders</i></h7> */}
  <p className="text-reset">
  By building on and strengthening of the learners' 
  potentials and aspirations, we will be able to achieve the desired goals.
  ​ In addition, we inculcate the culture of hard work, 
  discipline and self reliance in order to face the 
  challenge of the fast changing world.
      </p>
      <div >
			<h6 >VISION</h6>
			<p >Responsible lifelong learners and global citizens with leadership qualities</p>
		</div>
        <div >
			<h6 >MISSION</h6>
			<p >Responsible lifelong learners and global citizens with leadership qualities</p>
		</div>
    <Button variant="primary">Learn More</Button>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <Card style={{ width: '100%', height: '500px' }}>
     
      <Card.Body>
        <Card.Title>Admissions</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <section className="card-section">
    <Card className="card-one" id="card-id" style={{ width: '23rem', height: '20rem'}}>
      {/* <Card.Img variant="top" src="https://cdn.standardmedia.co.ke/images/friday/xgtdgj38un3xq61bce64a22960.jpg" /> */}
      
      <Card.Body>
        <Card.Title style={{ color: 'white'  }}>Why Venmar School</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
       <Card.Body>
       </Card.Body>
    </Card>
    
    <Card className="card-two"  id="card-id" style={{ width: '23rem', height: '20rem'}}>
      {/* <Card.Img variant="top" src="https://cdn.standardmedia.co.ke/images/monday/chess_atieno_and_ok61c0b9d2f25ce.jpg" /> */}
      <Card.Body>
        <Card.Title style={{ color: 'white'  }}>Our values</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
       <Card.Body>
        
       
      </Card.Body>
    </Card>
    <Card className="card-three"  id="card-id" style={{ width: '23rem', height: '20rem'}}>
      {/* <Card.Img variant="top" src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" /> */}
      <Card.Body>
        <Card.Title style={{ color: 'white'  }} >Our Mission</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
       <Card.Body>
       
      </Card.Body>
    </Card>
  
    </section>
    <Footer />
</div>
  );
}

export default Home;
