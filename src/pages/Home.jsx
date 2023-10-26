import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Home() {
  return (
    <>
    <div style={{width:'100%',height:'100vh', backgroundColor:'#90ee90'}} className='container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
        <h1 style={{fontSize:'80px'}} className='fw-bolder text-light'>
          <i className='fa-brands fa-stack-overflow fa-bounce'>Project Fair</i></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem deleniti minus facilis illo, aspernatur a suscipit corporis incidunt temporibus animi neque dolorum tempora accusantium odio. Necessitatibus est consequatur alias corrupti!</p>
          <button className='btn btn-warning'>Start To Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i></button>
        
        </Col>
        <Col sm={12} md={6}>
          <img src="" alt="" />
        </Col>
      </Row>
    </div>
    <div  className='all-projects mt-5'>
      <h1 className='text-ceter mb-5'>Explore Our Projects</h1>
      <marquee></marquee>
    </div>
    </>
  )
}

export default Home 