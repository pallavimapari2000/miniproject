import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



export function Airtel() {
    return (

        <>


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
            {/* ===================================================================== */}

            <div className="text-center">
                <h1>AIRTEL</h1>
            </div>
            {/* ==================================================================== */}
            <Container className="p-5">
                <Row>
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 99</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 28 days</p>
                                    <p>Get Rs. 99 Talktime + 200 MB Data + Calls Local/STD/LL at 2.5 p/sec + Local SMS at 1 Rs/SMS</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* --------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 179</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 28 days</p>
                                    <p>Description :- Get Truly Unlimited calls + 2 GB Data + 300 SMS + Wynk music.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ----------------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 455</h1></Card.Title>
                                <hr></hr>

                                <Card.Text>
                                    <p>Validity:- 84 days</p>
                                    <p>Description :- Get Truly Unlimited calls + 6 GB Data + 900 SMS + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
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
                                    <p>Description:-Get Truly Unlimited calls + 1.5 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* --------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 155</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 24 days</p>
                                    <p>Description :- Get Truly Unlimited calls + 1 GB Data + 300 SMS + Wynk music.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ----------------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 719</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 84 days</p>
                                    <p>Description :- Get Truly Unlimited calls + 1.5 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag + Xstream Mobile Pack (84 Days access to any one of the select Xstream channels) + RewardsMini Subscription.</p>
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
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 666</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 77 days</p>
                                    <p>Description:- Get Truly Unlimited calls + 1.5 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* --------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 319</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 1 Month</p>
                                    <p>Description :- Get Truly Unlimited calls + 2 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ----------------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 519</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 60 days</p>
                                    <p>Description :-Get Truly Unlimited calls + 1.5 GB/Day Data + 100 SMS/Day + Apollo 24|7 Circle + Wynk music + Rs. 100 cashback on fastag.</p>
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
                                <Card.Title><h1>₹ 181</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 30 days</p>
                                    <p>Description:- Get 1 GB/Day Data.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* --------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 19</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 1 Day</p>
                                    <p>Description :- Get 1 GB Data</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ----------------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 155</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 24 days</p>
                                    <p>Description :-	Get Truly Unlimited calls + 1 GB Data + 300 SMS + Wynk music.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* ============================================== */}
                <Row>
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 155</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 24 days</p>
                                    <p>Description:- Get Truly Unlimited calls + 1 GB Data + 300 SMS + Wynk music.</p>
                                </Card.Text>
                                <Button variant="primary">Recharge</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ----------------------------- */}
                    <Col lg={4}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title><h1>₹ 479</h1></Card.Title>
                                <hr></hr>
                                <Card.Text>
                                    <p>Validity:- 24 days</p>
                                    <p>Description :-	</p>
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