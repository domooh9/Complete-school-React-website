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
src="pictures/imag.jpeg"
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
src="pictures/images.jpeg"
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
      <Card.Img variant="top" src="pictures/im.jpg" />
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
      <Card.Img variant="top" src="pictures/im.jpg" />
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
      <Card.Img variant="top" src="pictures/im.jpg" />
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
      <Card.Img variant="top" src="pictures/im.jpg" />
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
