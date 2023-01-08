// import "./home.css";
import { Carousel, Card, Container, Col, Row } from 'react-bootstrap';

export function Home() {
  return (


    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://www.jio.com/desktop-5g-new.png" width={1380} height={500}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Taking India ahead with 5G !!!</h1>
            <p>Register now with Jio Welcome Offer to enjoy unlimited data at up to 1 Gbps speed</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="j2.png" width={1380} height={500}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>FREE SIM,FREE home delivery</h1>
            <p>More than just a new connection ,its a delightful beginning of many priceless moments.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="j3.jpg" width={1380} height={500}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Explore VI Celebration Offer now</h1>
            <p>100% value back on Rs.2,999 anual plan with shopping, gifting & travel coupons and 75 GB Extra data.

            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*================================================================================= */}

      <div >
        <Container className="p-5 " border="success" >
          <Row>
            <Col lg={4}>
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="V1.png" />
                <Card.Body>
                  <Card.Title><h2>Stay connected when abroad...</h2></Card.Title>
                  <Card.Text>
                    Travel with Jio benefits the world over.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* -------------------------------- */}

            <Col lg={4}>
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="v3.png" />
                <Card.Body>
                  <Card.Title><h2>Recharge and get Rewards!!!</h2></Card.Title>
                  <Card.Text>
                    Get cashback, scratch cards, and vouchers!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* ------------------------------------- */}

            <Col lg={4}>
              <Card border="primary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="v2.png" />
                <Card.Body>
                  <Card.Title><h2>Wi-Fi calling redefined!</h2></Card.Title>
                  <Card.Text>
                    Sound crystal-clear on calls, connect with anyone,anywhere.
                  </Card.Text>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
      {/* ========================================================================================== */}

      <Container>
     <video width={1020} height={440} controls="autoplay">
       <source src="jioadd.mp4" type="video/mp4" />
     </video>
     </Container>

      {/* ============================================================================================= */}

      <div >

        <div style={{ display: "flex" }}>
          <div>
            <img src="v6.png" alt="" width={600} height={400} />
          </div>
          <div class="head p-5  ">
            <h1>High-speed, reliable connectivity</h1>
            <p>Besides mobile internet at 4G speed, enjoy unlimited data, FREE calls & SMS and more anywhere in India.</p>
          </div>
        </div>


        <div style={{ display: "flex" }}>
          <div class="head p-5 ">
            <h1>Share data with family</h1>
            <p>Use Family Add-on to add all your family members and share data benefits with them from a single connection.</p>
          </div>
          <div>
            <img src="v8.jpg" alt="" width={600} height={400} />
          </div>

        </div>

      </div>
      {/* ========================================================================================================== */}



    </div>

  );
}