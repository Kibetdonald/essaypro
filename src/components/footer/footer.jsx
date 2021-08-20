import React from 'react';
import './style.css';
import { SocialIcon } from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
      <center>
            <div className="footerContainer">
            <Row>
                <Col> <h3>Links</h3>
                    <ul>
                        <li className="footerLinks"><a href="/home">About Us</a></li>
                        <li className="footerLinks"><a href="/home">Services</a></li>
                        <li className="footerLinks"><a href="/home">Order</a></li>
                        <li className="footerLinks"><a href="/home">Our Offers</a></li>
                        <li className="footerLinks"><a href="/home">Contact</a></li>


                    </ul>
                </Col>
            
                <Col><h3>Services</h3>
                    <ul>
                        <li className="footerLinks"><a href="/home">Essay Writing</a></li>
                        <li className="footerLinks"><a href="/home">Online Tutoring</a></li>
                        <li className="footerLinks"><a href="/home">Exams</a></li>

                    </ul>
                </Col>
               
                <Col>
                <h3>Social Media</h3>
                   <div className="socialMedia">
                   <a href="https://mail.google.com/mail/u/your@email.com/#inbox?compose=new&to=blahblah@gmail" rel="noreferrer" target="_blank"><SocialIcon network="google" style={{ height: 25, width: 25 }} /></a>&nbsp;
                    <a href="https://vm.tiktok.com/ZSJt7fttw/" rel="noreferrer" target="_blank"><SocialIcon network="tiktok" style={{ height: 25, width: 25 }} /></a>&nbsp;

                    <a href="https://wa.me/message/44JRXDZBFGE7E1" target="_blank" rel="noreferrer"><SocialIcon network="whatsapp" style={{ height: 25, width: 25 }} /></a><br />
                    <SocialIcon className="socialmedialinks" target="_blank" rel="noreferrer" network="instagram" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon className="socialmedialinks" target="_blank" rel="noreferrer" network="twitter" style={{ height: 25, width: 25 }} />&nbsp;
                    <SocialIcon className="socialmedialinks" target="_blank" rel="noreferrer" network="linkedin" style={{ height: 25, width: 25 }} />

                   </div>
                </Col>
              

            </Row>
            <div className="Copyright">
                <p>ESSAYS  | POWERPOINT   | ONLINE TUTORING  |   EXAMS  |</p>
                <span>Copyright 2021 Essaysbykirsten, All rights reserved. </span>
                <br/> <br/>
            </div>
        </div>
      </center>
    )
}
