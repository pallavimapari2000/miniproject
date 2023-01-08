// import { Container, Card, Badge, Row,Col } from 'react-bootstrap';
// import "./contact.css";

// export function Contacthere() {
//   return (

//     <div className="contact_content">
//       <Row>
//         <Col lg={6}>
//       <Container className="p-5 " border="success" style={{ width: '45rem' }}>
//         <Card className="bg-dark text-white p-5">
//         <Card.Title><h1>Contact us</h1>
//           </Card.Title>
//           <Card.Text>
//             <div >
//               <h3>You can contact us on :</h3>
//               <Badge bg="info" className='p-2 m-2 text-dark fw-bolder'>91-9693736745</Badge>

//               <Badge bg="info" className='p-2 text-dark fw-bolder'>QuickRecharge@100.com</Badge>
//             </div>

//           </Card.Text>

//           <Card.Text><div>
//             <h4>Note:</h4>
//             <p>1. We are available on our IVR channel from Monday-Friday: 11am-5pm IST (except all major holidays.)</p>
//             <p>2. Kindly allow us 24working hrs to reply to your email. Rest assured all your queries will be answered.</p>
//           </div></Card.Text>

//           <Card.Img variant="top " src="https://www.easemydeal.com/assets/image/contact_us_img.png" width={50} height={350} />

//         </Card>
//          </Container>
//          </Col>
//          {/* ================================================================ */}

         
//   <Col lg={6} className="p-5">
//   <form>
//     Name: <input type="text" name="usrname" />
//     <br />
//     <br />
//     E-mail: <input type="text" name="mailid" />
//     <br />
//     <br />
//     <input type="submit" />
//   </form>
//   <br />
//   <textarea
//     rows={10}
//     cols={50}
//     name="comment"
//     form="usrform"
//     defaultValue={"    Enter text here..."}
//   />

// </Col>

//     </Row>
//     </div>
//   );
// }
// // ---------------------------------------------------------------------------------------------
// // import { Component } from "react"
// // // import { Container, Card, Badge, Row,Col } from 'react-bootstrap';
// // import { Row,Col } from 'react-bootstrap';
// // import "./contact.css";
// // import { saveCustomer } from "./CustomerApiServices";

// // export class Contacthere extends Component() 
// // {
// //   constructor() 
// //   {
// //   super();
// //   this.state = {
// //       Name: '',
// //       Email: '',
// //       Comment:''

// //   }
// // }
// // handleChange = (event) => {
// //   this.setState({ [event.target.name]: event.target.value })
// // }




// // handleSubmit = async (event) => {
// //   event.preventDefault();  //page cannot be reload
// //   const response = await saveCustomer(this.state);
// //   console.log(response);

// // }

// // render() {
// //   return (
  

// //     <div className="contact_content">
// //       <Row>
//         {/* <Col lg={6}>
//       <Container className="p-5 " border="success" style={{ width: '45rem' }}>
//         <Card className="bg-dark text-white p-5">
//         <Card.Title><h1>Contact us</h1>
//           </Card.Title>
//           <Card.Text>
//             <div >
//               <h3>You can contact us on :</h3>
//               <Badge bg="info" className='p-2 m-2 text-dark fw-bolder'>91-9693736745</Badge>

//               <Badge bg="info" className='p-2 text-dark fw-bolder'>QuickRecharge@100.com</Badge>
//             </div>

//           </Card.Text>

//           <Card.Text><div>
//             <h4>Note:</h4>
//             <p>1. We are available on our IVR channel from Monday-Friday: 11am-5pm IST (except all major holidays.)</p>
//             <p>2. Kindly allow us 24working hrs to reply to your email. Rest assured all your queries will be answered.</p>
//           </div></Card.Text>

//           <Card.Img variant="top " src="https://www.easemydeal.com/assets/image/contact_us_img.png" width={50} height={350} />

//         </Card>
//          </Container>
//          </Col> */}
//          {/* ================================================================ */}

         
//   {/* <Col lg={6} className="p-5">
//   <form onSubmit={this.handleSubmit}>
//     Name: <input type="text" name="Name" onChange={this.handleChange} />
//     <br />
//     <br />
//     E-mail: <input type="text" name="Email" onChange={this.handleChange}/>
//     <br />
//     <br />
//     <input type="submit" />
  
//   <br />
//   <textarea
//     rows={10}
//     cols={50}
//     name="Comment"
//     form="usrform"
//     defaultValue={" Enter text here..."}
//     onChange={this.handleChange}
//   />
// </form>
// </Col>


//     </Row>
//     </div>
//   );
// }
// }
//  */}

// --------------------------------------------------------------------------------------------------------------------------------


import { setFormData } from './Contact';

import { Container, Col, Row, Form ,Badge} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from "react";
import axios from 'axios';

export function Contacthere() {

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [comment,setComment] = useState('')

const handleName = (event)=>
{
    setName({[event.target.name]:event.target.value})
}


const handleApi = (event)=>
{
    event.preventDefault();
    let e=document.getElementById('email').value;
    let c=document.getElementById('comment').value;
    let j={
        'name':name.name,
        'email':e,
        'comment':c
    }
  

    axios.post('http://localhost:9800/Contacthere',j)
    .then(result =>
        {
            console.log(result.data.value)
            alert("Successfully submitted")
        })
        .catch(err =>
            {
                console.log(err)
            })

}

    return (
        <div>
           
    
            <Row>
                <Col lg={6}>
                {/* <Container className="p-5 " border="success" style={{ width: '45rem' }}>
            <Card style={{ width: '40rem'}}>
               
                <Card.Body>
                    <Card.Title><h1>Contact Us</h1></Card.Title>
                    <Card.Text>
                        You can contact us on
                    </Card.Text>
                    <Button variant="primary">+91-1234567890</Button>{'            '}
                    <Button variant="primary">QuickRecharge@100.com</Button><br></br><br></br>
                    <Card.Text>
                       <h4>Note:</h4>
                       1.We are available on our IVR channel from Monday-Friday:11am-5pm<br></br>
                       IST(except all major holidays.)<br></br>
                       2.Kindly allows us 24 working hrs to reply to your email. Rest assured all your <br></br>
                       queries will be answered.
                    </Card.Text>
                    <Card.Img variant="top" src="https://www.easemydeal.com/assets/image/contact_us_img.png" width={40} height={350}/>
                </Card.Body>
            </Card>
            </Container> */}
            <Container className="p-5 " border="success" style={{ width: '45rem' }}>
         <Card className="bg-dark text-white p-5">
        <Card.Title><h1>Contact us</h1>
          </Card.Title>
           <Card.Text>
            <div >
             <h3>You can contact us on :</h3>
            <Badge bg="info" className='p-2 m-2 text-dark fw-bolder'>91-9693736745</Badge>

               <Badge bg="info" className='p-2 text-dark fw-bolder'>QuickRecharge@100.com</Badge>
             </div>

           </Card.Text>

           <Card.Text><div>
            <h4>Note:</h4>
           <p>1. We are available on our IVR channel from Monday-Friday: 11am-5pm IST (except all major holidays.)</p>
            <p>2. Kindly allow us 24working hrs to reply to your email. Rest assured all your queries will be answered.</p>
           </div></Card.Text>

           <Card.Img variant="top " src="https://www.easemydeal.com/assets/image/contact_us_img.png" width={50} height={350} />

         </Card>
          </Container>
            </Col>
           
           
         
            <Col lg={4}>
            <Container className="p-5">
                        <Form onSubmit={handleApi}>
                        <Form.Group className="mb-3">
                         <Form.Label>Name</Form.Label>
                         <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleName}/>
                         </Form.Group>

                         <Form.Group className="mb-3">
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" id="email" placeholder="Enter Email" email="email" />
                         </Form.Group>
                         
                         <Form.Group className="mb-3">
                          <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" id="comment" placeholder="Enter your comments" comment="comment" rows={5} width={50} />
                            </Form.Group>

                            <Button as="input" type="submit" value="Submit"  />{' '}
                        
                        
                        </Form>
                    
                    </Container>
            </Col>
          </Row>
</div>
);

}