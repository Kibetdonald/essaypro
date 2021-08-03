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
import { BsFillPlayFill } from "react-icons/bs";
import '../../responsive.css'

export const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShows, setModalShows] = React.useState(false);
    return (
        <div>


            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"> <img className="logo" src="./assets/images/logo.svg" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav className="me-auto">
                                <Nav.Link data-nav-section="about" className="navLink" href="#home">About</Nav.Link>
                                <Nav.Link className="navLink" href="#Services">Services</Nav.Link>

                                <Nav.Link className="navLink" href="#Offers">Offers</Nav.Link>
                                <Nav.Link className="navLink" href="#Contact">Contact</Nav.Link>
                                <Nav.Link >
                                    <button onClick={() => setModalShow(true)} style={{ marginTop: "-10%" }} type="submit" href="#" className="hirebtn">Hire Us</button>
                                </Nav.Link>
                            </Nav>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
             <showVideoModal
                show={modalShows}
                onHide={() => setModalShows(false)}
            />
            <Row>
                <Col >

                    <div className="centerDiv">
                        <h1>
                            <TextLoop >
                                <div>
                                    <span>ESSAY WRITING (ANY TYPE) </span>
                                </div>
                                <div>
                                    <span>RESEARCH PAPER WRITING </span>
                                </div>
                                <div>
                                    <span>RESEARCH PROPOSAL WRITING</span>
                                </div>
                                <div>
                                    <span>CASE STUDY WRITING</span>
                                </div>
                            </TextLoop>{""}

                            &nbsp; AT YOUR CONVENIENCE</h1>



                        <span className="aboutText">
                            All types of writing service for students who want results twice as quickly.
                            Use our essay writing service. Whatever type of academic paper you require to boost your grade and fulfill your deadlines, we can help.

                        </span>
                        <br /> <br />
                        <span className="check">
                            <BsCheck />Flexible prices <br />
                            <BsCheck />100% Original Essays<br />
                            <BsCheck />On-time Delivery<br />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                            <BsFillStarFill className="rate" />
                        </span>
                        <br />

                        <button className="common-btn">Get in touch</button>

                        <button onClick={() => setModalShows(true)} className="common-btn2"><BsFillPlayFill style={{ fontSize: "28" }} />Watch Video</button>
                    </div>

                </Col>
                <Col>
                    <div className="svgImage">
                        <img src="./assets/images/hire.svg" width="80%" alt="svg" />
                    </div></Col>
            </Row>
            <div className="fixedText">
                <Col>
                    <Row> <SocialIcon network="google" style={{ height: 25, width: 25 }} /></Row>
                    <br />
                    <Row><SocialIcon network="twitter" style={{ height: 25, width: 25 }} /></Row>
                    <br />
                    <Row><SocialIcon network="facebook" style={{ height: 25, width: 25 }} /></Row>
                    <br />
                    <Row> <SocialIcon network="instagram" style={{ height: 25, width: 25 }} /></Row>


                    <div className="vertical"></div>
                </Col>
            </div>
            <div className="fixedTextRight">
                <Col>

                    <Row><span className="profileText">hireus@gmail.com</span></Row>
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
