import React from 'react';
import './style.css';
import { SocialIcon } from 'react-social-icons';
import { Row, Col} from 'react-bootstrap';

export const Footer = () => {
    return (
        <div className="footerContainer">
            <Row>
                
                <Col> <h3>Links</h3>
                    <ul>
                        <li><a href="/home">About Us</a></li>
                        <li><a href="/home">Services</a></li>
                        <li><a href="/home">Order</a></li>
                        <li><a href="/home">Our Offers</a></li>
                        <li><a href="/home">Contact</a></li>


                    </ul>
                </Col>
                <Col><h3>ABOUT</h3>
                    <ul>
                        
                        <li><a href="/home">Terms & Conditions</a></li>
                        <li><a href="/home">Privacy Policy</a></li>
                        <li><a href="/home">Cookie Policy</a></li>



                    </ul>
                </Col>
                <Col><h3>Services</h3>
                    <ul>
                        <li><a href="/home">Essay Writing</a></li>
                        <li><a href="/home">Tutoring</a></li>
                        <li><a href="/home">Essay Editing</a></li>
                       



                    </ul>
                </Col>
                <Col><h3>Social Media</h3>
                    <SocialIcon network="google" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="facebook" style={{ height: 25, width: 25 }} /><br />
                    <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="pinterest" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} />

                </Col>

            </Row>
            <div className="Copyright">
                <p>ESSAYS  | POWERPOINT   | TESTS   |   EXAMS  |</p>
                <p>Copyright 2021 EssayPro, All rights reserved. </p>
            </div>
        </div>
    )
}
