import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";
 import './styles/Home.css'

function Home() {
  return (
<div>
<div id="slid" className="slider" style={{ display: 'block', width: 1300, padding: 30 }}>
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
  <h1><p id="pi">Welcome to</p> <p id="pp">Venmar Primary School Kisumu</p></h1>
   <h7 className="text-center"><i>Today's Learners Tomorrows's Leaders</i></h7>
  <p className="text-reset">
  By building on and strengthening of the learners' 
  potentials and aspirations, we will be able to achieve the desired goals.
  ​ In addition, we inculcate the culture of hard work, 
  discipline and self reliance in order to face the 
  challenge of the fast changing world.
      </p>
      <button className="btt">Visit Us today</button>
      <button id="bttt" className="btt">Visit Us today</button>
      <button className="btt">Visit Us today</button>
      <button id="bttt" className="btt">Visit Us today</button>
      </div>
    
    <section className="card-section">
    <Card className="card-one" id="card-id" style={{ width: '18rem', height: '20rem'}}>
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
    
    <Card className="card-two"  id="card-id" style={{ width: '18rem', height: '20rem'}}>
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
    <Card className="card-three"  id="card-id" style={{ width: '18rem', height: '20rem'}}>
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
    <Card className="card-four"  id="card-id" style={{ width: '18rem' , height: '20rem'}}>
      {/* <Card.Img variant="top" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" /> */}
      <Card.Body>
        <Card.Title style={{ color: 'white'  }}>What we do best</Card.Title>
        <Card.Text style={{ color: '#00171F'  }}>
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
