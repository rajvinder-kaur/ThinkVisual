import React from 'react'
import Container from 'react-bootstrap/Container';
import Header1 from '../Header1';
import Row from 'react-bootstrap/Row';
import ShapeExample from '../Image';
import Col from 'react-bootstrap/Col';
import Text2 from '../Text-2/Text2';
import picture from "../../assets/child.png"
// import Footer from '../Footer'
function Main() {
  return (
    <div className='w-100  text-start'>
      <Header1 />
      {/* <Container className='mt-5 vh-100 '>
        <Row className=' align-middle' >
          1st section
          <Col >
            <div className='mt-5 ' >
              <h3>Welcome to an immersive world of interactive learning!</h3>
              <p>Explore our platform and unlock the power of visualization in education.</p>
            </div>
          </Col>
          <Col>
            <ShapeExample />
          </Col>
        </Row>
      </Container> */}

      <table className='mt-5 vh-100 container w-50'>
        <tr className='  align-middle  '>
          <td><h1>Welcome to an immersive world of interactive learning!</h1><p>Explore our platform and unlock the power of visualization in education.</p><p>Prepare to embark on a journey where concepts come to life, and learning knows no boundaries.</p></td>
          <td><ShapeExample /></td>
        </tr>
      </table>
      <style jsx>{`
              h1{
                font-size: 4rem;
              }
              table tr p{
                font-size: 2rem;
              }
      `}</style>

      {/* 2nd section */}
      <table className='container vh-100'>
        <tr className='  align-middle  '> 
          <td>
            <img src={picture} alt="" />
          </td>
          <td className='  align-middle  '>
            <div className='d-flex'>
              <h5>What features our platform offers?</h5>
            </div>
            <Text2 />
          </td>
        </tr>
      </table>
      {/* <Footer /> */}
    </div >
  )
}

export default Main