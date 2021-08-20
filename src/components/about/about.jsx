import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './style.css';
import { BsAward } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import CountUp from 'react-countup';
import './responsive.css';
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
               <h3><BsFillPeopleFill/>  <CountUp duration={5} end={100} />%,{" "}<br/>
                </h3>
                <p>Orders delivered on time</p>
                </Col>
                <Col>
               <h3><BsFillPersonCheckFill/> <CountUp duration={5} end={40} />{" "}<br/>
                </h3>
                <p>Clients</p>
                </Col>
                <Col>
               <h3> <BsStopwatch/>2 Minutes{" "}<br/>
              </h3>
              <p> Average response time</p>
                </Col>
            </Row>

            
        </div>
    )
}
