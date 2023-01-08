import { Accordion, Container } from 'react-bootstrap';
import "./faq.css";


export function FAQ() {
  return (
    <>
     <div className="faqhere">
    <Container className="p-5">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Que.  What is Quick Recharge?</Accordion.Header>
        <Accordion.Body>
        Ans:- Quick Recharge is a digital marketplace that provides online services like Mobile Recharges of different operators.  Quick Recharge has a network of I million+ happy customers and 10000+ active distributors & agents across India using Mobile Recharges, of different operators under a single portal. One can log in to www. Quick Recharge.com to visit  Quick Recharge website to avail of the services.
       </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Que. Is Quick Recharge safe & genuine?</Accordion.Header>
        <Accordion.Body>
        Ans:- Quick Recharge is one of the most secured platforms to make payments online for no. of services. We Quick Recharge  never store payment details with us. Transactions done through Quick Recharge  are completely safe and secure. One does not need to worry about any security issues or any fraudulent transaction on Quick Recharge . Hence Quick Recharge  is the safest and genuine platform in India keeping customers interest as its top priority. Quick Recharge  assures complete security to its customers.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Que. Is  Quick Recharge Indian?</Accordion.Header>
        <Accordion.Body>
        Ans:- Yes,  Quick Recharge is an Indian company. It is made in India platform. It is made by Indians for Indians 
           
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Que. Is Quick Recharge safe & genuine?</Accordion.Header>
        <Accordion.Body>
        Ans:- Quick Recharge is one of the most secured platforms to make payments online for no. of services. We Quick Recharge  never store payment details with us. Transactions done through Quick Recharge  are completely safe and secure. One does not need to worry about any security issues or any fraudulent transaction on Quick Recharge . Hence Quick Recharge  is the safest and genuine platform in India keeping customers interest as its top priority. Quick Recharge  assures complete security to its customers.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Que. What is good in Quick Recharge ?</Accordion.Header>
        <Accordion.Body>
        Ans:- Quick Recharge is consistently good in quality and performances. Apart from this, there are several reasons one should opt for EaseMyDeal.
            <li>24*7 uptime.</li> 
            <li> Instant refunds.</li>
            <li> Least downtime</li>
            <li>99.9% success rate</li>
            <li> Long term credibility</li>
            <li>Faster quality services</li>
            <li> Never stores payment details</li>
            <li> Smooth and user-friendly interface</li>
            <li> Excellent customer support on calls, emails and WhatsApp</li>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    </div>

    </>
  );
}