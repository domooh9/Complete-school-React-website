import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


 import './styles/Home.css'

function Home() {
  return (
<div>
<div className="slider" style={{ display: 'block', width: 1300, padding: 30 }}>
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
    <section className="card-section">
    <Card id="card-id" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.standardmedia.co.ke/images/friday/xgtdgj38un3xq61bce64a22960.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
       <Card.Body>
        <Card.Link href="#"><button className="btm">Learn More</button></Card.Link>
       
      </Card.Body>
    </Card>
    <Card id="card-id" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.standardmedia.co.ke/images/monday/chess_atieno_and_ok61c0b9d2f25ce.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
       <Card.Body>
        <Card.Link href="#"><button className="btm">Learn More</button></Card.Link>
       
      </Card.Body>
    </Card>
    <Card id="card-id" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
       <Card.Body>
        <Card.Link href="#"><button className="btm">Learn More</button></Card.Link>
       
      </Card.Body>
    </Card>
    <Card id="card-id" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
       <Card.Body>
        <Card.Link href="#"><button className="btm">Learn More</button></Card.Link>
       
      </Card.Body>
    </Card>
    </section>
  
</div>
  );
}

export default Home;
