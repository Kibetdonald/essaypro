import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './style.css';
import { BsAward } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import CountUp from 'react-countup';
export const About = () => {
    return (
        <div className="about">
            <Row>
           
                <Col>
               <h3><BsAward/>{" "}
               <CountUp start={0.4}  decimals={1} duration={5} end={9.4} />/10</h3>
               <p> Average Quality Score</p>
                </Col>
                <Col>
               <h3>  <CountUp duration={5} end={100} />%,{" "}<BsFillPeopleFill/><br/>
                </h3>
                <p>Orders delivered on time</p>
                </Col>
                <Col>
               <h3> <CountUp duration={5} end={40} />{" "}<BsFillPersonCheckFill/><br/>
                </h3>
                <p>Clients</p>
                </Col>
                <Col>
               <h3> 2 Minutes{" "}<BsStopwatch/><br/>
              </h3>
              <p> Average response time</p>
                </Col>
            </Row>

            
        </div>
    )
}
