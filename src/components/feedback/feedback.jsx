import React from 'react';
import { Card} from 'react-bootstrap';
import './style.css';
import Tilt from 'react-vanilla-tilt'
import { BsFillStarFill } from "react-icons/bs";
export const Feedback = () => {
    return (
        <div>
            <h3 className="topic">Feedback From Our Clients</h3>
            <br />
            <div className="feedbackdiv">
                <br />

                <Tilt style={{ border: "none" }} options={{
                    max: 25,
                    speed: 400,
                    glare: true,
                    "max-glare": 1,
                }}>

                     <Card className="cardSection">

                        <Card.Body>
                            <Card.Title>
                                <img className="avatar" alt="aima" src="./assets/images/avatar.svg" />
                                <span className="customerId"> Customer ID: #1024</span>
                                <br />

                                <div className="rate">
                                    <section>
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                    </section>
                                </div>
                            </Card.Title>
                            <Card.Text>
                                In August, I returned to school and received a perfect score on the assignment. Thank you a lot!
                                I would be hesitant to collaborate with you again.
                                &nbsp;&nbsp;

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">	8-August-2021</small>
                        </Card.Footer>
                    </Card>

                </Tilt>
                &nbsp;&nbsp;&nbsp;

                <Tilt style={{ border: "none" }} options={{
                    max: 25,
                    speed: 400,
                    glare: true,
                    "max-glare": 1,
                }}>
                    <Card className="cardSection">

                        <Card.Body>
                            <Card.Title>
                                <img className="avatar" alt="aima" src="./assets/images/avatar.svg" />
                                <span className="customerId"> Customer ID: #1004</span>
                                <br />

                                <div className="rate">
                                    <section>
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                    </section>
                                </div>
                            </Card.Title>
                            <Card.Text>
                                Right before my exam, he helped me comprehend business law! The teacher is excellent. I'd work with him again if the opportunity arose.
                                &nbsp;&nbsp;
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">	24-July-2021</small>
                        </Card.Footer>
                    </Card>
                </Tilt>
                &nbsp;&nbsp;&nbsp;
                <Tilt style={{ border: "none" }} options={{
                    max: 25,
                    speed: 400,
                    glare: true,
                    "max-glare": 1,
                }}>
                    <Card className="cardSection">

                        <Card.Body>
                            <Card.Title>
                                <img className="avatar" alt="imageAsset" src="./assets/images/avatar.svg" />
                                <span className="customerId"> Customer ID: #0933</span>
                                <br />

                                <div className="rate">
                                    <section>
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                        <BsFillStarFill className="rate" />
                                    </section>
                                </div>
                            </Card.Title>
                            <Card.Text>
                                I received a 22 out of 25 on the assignment. Sir, many thanks! Working with you was a pleasure.
                                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
                                &nbsp;&nbsp;
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">	4-August-2021</small>
                        </Card.Footer>
                    </Card>
                </Tilt>
            </div>
        </div>
    )
}
