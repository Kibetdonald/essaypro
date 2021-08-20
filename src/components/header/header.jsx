import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './style.css'
import { Row, Col } from 'react-bootstrap';
import TextLoop from "react-text-loop";
import { SocialIcon } from 'react-social-icons';
import Modal from 'react-bootstrap/Modal'
import emailjs from 'emailjs-com';
import { BsCheck } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";

import './responsive.css';

export const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="header">

            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                      
                        {/* <img className="logo" src="./assets/images/untitled.png" alt="logo" /> */}
                        <h3 className="logoText">Essaysbykirsten</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link data-nav-section="about" className="navLink" href="#home">About</Nav.Link>
                            <Nav.Link className="navLink" href="#Services">Services</Nav.Link>

                            <Nav.Link className="navLink" href="#Offers">Offers</Nav.Link>
                            <Nav.Link className="navLink" href="#Contact">Contact</Nav.Link>
                            <Nav.Link eventKey={2} href="#">
                                <button onClick={() => setModalShow(true)} style={{ marginTop: "-10%" }} type="submit" href="#" className="hirebtn">Hire Us</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


            <Row className="centersection">
                <Col>

                    <div className="centerDiv">
                        <h1>
                            <TextLoop >
                                <div>
                                    <span className="loopingText">ESSAY WRITING (ANY TYPE) </span>
                                </div>
                                <div>
                                    <span className="loopingText">RESEARCH PAPER WRITING </span>
                                </div>
                                <div>
                                    <span className="loopingText">RESEARCH PROPOSAL WRITING</span>
                                </div>
                                <div>
                                    <span className="loopingText">CASE STUDY WRITING</span>
                                </div>
                            </TextLoop>{""}

                            <br /> AT YOUR CONVENIENCE</h1>



                        <span className="aboutText">
                            All types of writing service for students who want results twice as quickly.
                            Use our essay writing service. Whatever type of academic paper you require to boost your grade and fulfill your deadlines, we can help.

                        </span>
                        <br />
                        <span className="check">
                            <BsCheck /><span>Flexible prices</span> <br />
                            <BsCheck /><span>100% Original Essays</span><br />
                            <BsCheck /><span>On-time Delivery</span><br />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                        </span>
                        <br />

                        <button onClick={() => setModalShow(true)} className="common-btn">Get in touch</button>
                        <br />   <br />   <br />   <br />   <br />


                    </div>

                </Col>
                <Col>
                    <div className="svgImage">
                        <img src="./assets/images/hire.svg" width="80%" alt="svg" />
                    </div></Col>
            </Row>

            <div className="fixedText">
                <Col>
                    <Row>
                        <a href="https://mail.google.com/mail/u/your@email.com/#inbox?compose=new&to=guruwriter5974@gmail" target="_blank" rel="noreferrer" ><SocialIcon network="google" style={{ height: 25, width: 25 }} /></a>
                    </Row>
                    <br />
                    <Row>
                        <a href="https://wa.me/message/44JRXDZBFGE7E1" target="_blank" rel="noreferrer"><SocialIcon network="whatsapp" style={{ height: 25, width: 25 }} /></a>
                    </Row>
                    <br />

                    <Row>
                        <a href="http://twitter.com/Essaysbykirsten" target="_blank" rel="noreferrer" ><SocialIcon network="twitter" style={{ height: 25, width: 25 }} /></a>
                    </Row>
                    <br />

                    <Row>
                        <a href="https://vm.tiktok.com/ZSJt7fttw/" target="_blank" rel="noreferrer" ><SocialIcon network="tiktok" style={{ height: 25, width: 25 }} /></a>
                    </Row>
                    <br />
                    <Row>
                        <a href="https://instagram.com/Essaysbykirsten" target="_blank" rel="noreferrer" ><SocialIcon network="instagram" style={{ height: 25, width: 25 }} /></a>
                    </Row>



                    <div className="vertical"></div>
                </Col>
            </div>
            <div className="fixedTextRight">
                <Col>

                    <Row><span className="profileText">guruwriter5974@gmail.com</span></Row>
                    <div className="vertical2"></div>
                </Col>
            </div>
        </div>
    )
}

//   Contact Us Modal
function MyVerticallyCenteredModal(props) {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hamp745', 'mytemplates', e.target, 'user_mXPiDCaihK32SDnS4zVpj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <Modal
            {...props}

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <closeButton />


            <Modal.Body className="modaldiv" >

                <Row>

                    <Col >
                        <span className="hire">Too much work? Need essay help?</span>
                        <span className="hire1">Hire Us</span>

                        <img className="contactSVG" src="./assets/images/tired.jpg" alt="contactme" height="90%" width="100%" />

                    </Col>

                    <Col>
                        <form className="form-floating" onSubmit={sendEmail}>


                            <div class="form-floating mb-3">
                                <input name="name" type="text" class="form-control" id="floatingInput" required />
                                <label for="floatingInput">Name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input name="email" type="email" class="form-control" id="floatingInput" required />
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input name="subject" type="text" class="form-control" id="floatingInput" required />
                                <label for="floatingInput">Subject</label>
                            </div>


                            <div class="form-floating">
                                <textarea class="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                                <label for="floatingInput">Comments</label>
                            </div>


                            <button type="submit" className="sendMessage">Send Message</button>


                        </form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="modaldiv" style={{ borderTop: "none" }}>


            </Modal.Footer>
        </Modal>
    );
}
