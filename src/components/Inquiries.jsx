import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/inquiries.css'
import Footer from "./Footer";

function Inquiries() {

    
      return (
        <div>
 <div className="cotainer">
    <div className="title">Inquire</div>
    <div className="cotent">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
          
            <input type="text" placeholder="Enter your name" required></input>
          </div>
       
          <div className="input-box">
            
            <input type="text" placeholder="Enter your email" required></input> 
          </div>
          <div className="input-box">
            
            <input type="text" placeholder="Enter your number" required></input>
          </div>
          <div className="input-box">
             <input  id="inpu-box" type="text" placeholder="Let's hear from you" required></input>
          </div>
          
        </div>
         <div className="button">
          <input type="submit" value="Register"></input>
        </div>
      </form>
    </div>
        </div>
        <Footer />
        </div>
       
      );
    };




export default Inquiries;
