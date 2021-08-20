import React from 'react'
import './style.css'
import Accordion from 'react-bootstrap/Accordion'
export const Faq = () => {
    return (
        <div className="faq" id="faq">
            <center><h3 className="topic">Frequenty Asked Question</h3></center>
            <br/>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do you guarantee the essay is plagiarism free?</Accordion.Header>
                    <Accordion.Body>
                        We have a zero-tolerance policy for plagiarism and ensure originality by putting each work through the most widely used anti-plagiarism software.
                        On request, we can supply you with this anti-plagiarism report.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How fast can you write my essay?</Accordion.Header>
                    <Accordion.Body>
                    The minimal deadline is 6 hours, however depending on the difficulty of the project, it may be significantly shorter.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the format of your written paper?</Accordion.Header>
                    <Accordion.Body>
                    Each paper you receive is composed in accordance with academic standards and format requirements. During the purchase procedure, you will be able to select from the following formats: APA, MLA, Chicago/Turabian, and others. The completed document will be formatted in line with the style specified by the writer. If you cannot find the style you want in the list, you can request a specific format in th
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Do i pay before or after the essay has been done?</Accordion.Header>
                    <Accordion.Body>
                    To reserve an essay writer, you must pay a deposit, which is retained until the essay is completed. Pay for the essay just after you have reviewed it and determined that it fulfills your criteria and needs.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}
