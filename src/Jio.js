import { Card, Container, Col, Row , Button} from 'react-bootstrap';
import {  Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Jio() {
  return (
    <>
    {/* <div class="alert alert-primary" role="alert">
         <span><a href="./" class="alert-link">JIO</a></span>
         <span><a href="./Airtel" class="alert-link">AIRTEL</a></span>
         <span><a href="./Vi" class="alert-link">Vi</a></span>
    </div> */}

<Navbar bg="primary" variant="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h3>Plans</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link><h4>Jio</h4></Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to={'/Airtel'}>
                                <Nav.Link><h4>Airtel</h4></Nav.Link>
                            </LinkContainer>  
                             <LinkContainer to={'/Vi'}>
                                <Nav.Link><h4>Vi</h4></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    {/* =========================================== */}
    <Container className="p-5">
      <Row>
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 209</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description:-Get Free Unlimited Voice Calls + 1 GB/day Data + 100 SMS/Day + Complimentary Subscription to Jio Apps	</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 666</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description :-	Get Free Unlimited Voice Calls + 1.5 GB/day Data + 100 SMS/Day + Complimentary Subscription to Jio Apps.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary"  style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 91</h1></Card.Title>
              <hr></hr>
  
              <Card.Text>
                <p>Validity:- 28days</p>
                <p>Description :-	Get Free Unlimited Voice Calls + 100 MB/Day + 200 MB Data + 50 SMS + Complimentary Subscription to Jio Apps</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      {/* ================================================================================= */}
      <Row>
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 299</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description:-Get Free Unlimited Voice Calls + 2 GB/day Data + 100 SMS/Day + Complimentary Subscription to Jio Apps.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------- */}
        <Col lg={4}>
          <Card border="primary"  style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 152</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description :-	Get Free Unlimited Voice Calls + 0.5 GB/Day Data + 300 SMS + Complimentary Subscription to Jio Apps</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 2999</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 365 days</p>
                <p>Description :-	Get Free Unlimited Voice Calls + 2.5 GB/day Data + 100 SMS/Day + Complimentary Subscription to Jio Apps + Get more than 100% value back with Benefits</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      {/* ========================================================================================================== */}
      <Row>
        <Col lg={4}>
          <Card border="primary"  style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 181</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 30 days</p>
                <p>Description:-Get 30 GB Data for all Customers.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 555</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 55 days</p>
                <p>Description :-	Get 55 GB Data + Complimentary Subscription to Jio Apps</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 241</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 30 days</p>
                <p>Description :-	Get 40 GB Data for all Customers.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      {/* ======================================================================================== */}
      <Row>
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 519</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 60 days</p>
                <p>Description:- Get Truly Unlimited calls + 1.5 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------- */}
        <Col lg={4}>
          <Card border="primary"  style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 319</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 1 Month</p>
                <p>Description :-	Get Truly Unlimited calls + 2 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 666</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 77 days</p>
                <p>Description :-	Get Truly Unlimited calls + 1.5 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
    // -------------------------------------------
    


  );
}