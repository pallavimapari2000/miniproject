import { Card, Container, Col, Row , Button} from 'react-bootstrap';
import {  Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Vi() {
  return (
    <>
    {/* <div class="alert alert-primary" role="alert">
         <span><a href="./" class="alert-link">Vi</a></span>
         <span><a href="./Airtel" class="alert-link">AIRTEL</a></span>
         <span><a href="./Jio" class="alert-link">JIO</a></span>
    </div>  */}

<Navbar bg="primary" variant="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h3>Plans</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/Jio'}>
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
              <Card.Title><h1>₹ 179</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description:- Get Unlimited Calls + 2 GB Data + 300 SMS + Vi Movies & TV Basic access.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 98</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description :-	Get Rs 99 Limited Validity Talktime + L+N Calls at 2.5p/sec + 200 MB Data. No Outgoing SMS. Standard tariff for SMS to 1900. 28 Day Service Validity.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary"  style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 155</h1></Card.Title>
              <hr></hr>
  
              <Card.Text>
                <p>Validity:- 24 days</p>
                <p>Description :- Get Unlimited Calls + 1 GB Data + 300 SMS.</p>
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
              <Card.Title><h1>₹ 479</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 56 days</p>
                <p>Description:- Get Unlimited Calls + 1.5 GB/Day Data + 100 SMS/Day + Enjoy Night data without limits from 12am to 6am + Weekend Data Rollover + Vi Movies & TV Classic access.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------- */}
        <Col lg={4}>
          <Card border="primary"  style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 299</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description :-	Get Unlimited Calls + 1.5 GB/Day Data + 100 SMS/Day + Enjoy Night data without limits from 12am to 6am + Weekend Data Rollover + Vi Movies & TV Classic access.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 599</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 70 days</p>
                <p>Description :-	Get Unlimited Calls + 1.5 GB/Day Data + 100 SMS/Day + Enjoy Night data without limits from 12am to 6am + Weekend Data Rollover + Vi Movies & TV Classic access.</p>
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
              <Card.Title><h1>₹ 1449</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 180 days</p>
                <p>Description:-Get Unlimited Calls + 1.5 GB/Day Data + 50 GB EXTRA Data + 100 SMS/Day + Enjoy Night data without limits from 12am to 6am + Weekend Data Rollover + Vi Movies & TV Classic access.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 719</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 84 days</p>
                <p>Description :- Get Unlimited Calls + 1.5 GB/Day Data + 100 SMS/Day + Enjoy Night data without limits from 12am to 6am + Weekend Data Rollover + Vi Movies & TV Classic access.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 39</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 7 days</p>
                <p>Description :-	Get 3 GB Data.</p>
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
              <Card.Title><h1>₹ 409</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description:- Get Unlimited Calls + 3.5 GB/Day Data + 100 SMS/Day + Enjoy Night data without limits from 12am to 6am + Weekend Data Rollover + Vi Movies & TV VIP access.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* --------------------- */}
        <Col lg={4}>
          <Card border="primary"  style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 128</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 28 days</p>
                <p>Description :-Get 10 Local On-net Night Minutes + All Local/National Calls at 2.5 paise/sec + Night minutes benefit available from 23:00 Hrs to 06:00 Hrs + Outgoing SMS - Rs 1/1.5/5 for Local/STD/ISD.</p>
              </Card.Text>
              <Button variant="primary">Recharge</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* ----------------------------- */}
        <Col lg={4}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><h1>₹ 2899</h1></Card.Title>
              <hr></hr>
              <Card.Text>
                <p>Validity:- 365 days</p>
                <p>Description :-	Get Unlimited Calls + 1.5 GB/Day Data + 75 GB EXTRA Data +100 SMS/Day + Enjoy Night data without limits from 12am to 6am + Weekend Data Rollover + Vi Movies & TV Classic access.</p>
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