import React from 'react'
import Container from 'react-bootstrap/Container';
import Header1 from '../Header1';
import Row from 'react-bootstrap/Row';
import ShapeExample from '../Image';
import Col from 'react-bootstrap/Col';
import Text2 from '../Text-2/Text2';
import Footer from '../Footer'
function Main() {
  return (
    <div className='w-100 h-100'>
      <Header1 />
      {/* <section className='container align-middle'>
        <h1 className='text-start'>THINK VISUAL</h1>
      </section> */}
      <Container className='mt-5 '>
        <Row>
          {/* 1st section */}
          <Col>
            <div className='mt-5' >
              <h3>Welcome to an immersive world of interactive learning!</h3>
              <p>Explore our platform and unlock the power of visualization in education.</p>
            </div>
          </Col>
          <Col className=''>
            <ShapeExample />
          </Col>
        </Row>
      </Container>

      {/* 2nd section */}
      <Container className='mt-5 d-inline-flex'>
        <Row>
          <Col className=''>
            <ShapeExample />
          </Col>
          <Col >
            <div className='d-flex'>
              <h5>What features our platform offers?</h5>
            </div>
            <Text2 />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div >
  )
}

export default Main