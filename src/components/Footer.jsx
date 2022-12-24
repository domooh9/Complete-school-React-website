import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import './styles/footer.css'

const Footer = () => {
return (
	<Box >
	<Container id="footer">
		<Row>
        <div className="contant">
		<Column id="foot">
			<Heading>About Us</Heading>
			<FooterLink href="#">Mission</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Community Service</FooterLink>
		</Column>
        </div>
        <div className="contant">
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
		</Column>
        </div>
        <div className="contant">
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			
		</Column>
        </div>
		<Column>
			
      
		</Column>
		</Row>
		<p className="copyright">© Copyright 2022 by Venmar School Kisumu, KE</p> 
	</Container>

	</Box>
);
};
export default Footer;
