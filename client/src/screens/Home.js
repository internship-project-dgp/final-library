import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'
const Home = () => {
  return (
<>

<header className="header">
      <div className="logo">
        <img
          src="https://nitdgp.ac.in/front/assets/images/logo.png"
          alt="NIT-DGP"
        />
      </div>

      <div className="text">
       <img src="https://nitdgp.ac.in/front/assets/images/logotext.png" alt="" />
      </div>
</header>

    <div className='btn-container'>

<div className="left-side">
<a href="http://">Home</a>
<a href="http://">NIRF</a>
<a href="http://">Chankya</a>
<a href="http://">NITD at a glance</a>
<a href="/library">Library</a>

</div>

<div className="right-side">
<a href="http://">Mail</a>
<a href="http://">contact</a>
<a href="http://">Hindi</a>
</div>
</div>


<div className="main-items">


    
<Carousel className='carousel'>
<Carousel.Item interval={1000}>
  <img
    className="d-block w-100"
    src="https://nitdgp.ac.in/uploads/academic_1550x51721.jpg"
    alt="First slide"
  />
  <Carousel.Caption>
    <span >NIT Durgapur ranked 6th in all NITs</span>
    
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={1000}>
  <img
    className="d-block w-100"
    src="https://nitdgp.ac.in/uploads/15_1_1_rangoli.jpg"
    alt="Second slide"
  />
  <Carousel.Caption>
    <span>Rangoli</span>
    
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://nitdgp.ac.in/uploads/cec-banner1.jpg"
    alt="Third slide"
  />
  <Carousel.Caption>
    <span>Covid 19</span>
    
  </Carousel.Caption>
</Carousel.Item>
</Carousel>


{/* <div className="right">
<h1>headigns</h1>
</div> */}
</div>





<footer>
      <div className="footer-container">
        <ul>
          <li>Quick Links</li>
          <li>Holidays</li>
          <li>NIRF</li>
          <li>NAD</li>
          <li>Notices@NITD</li>
          <li>Careers@NITD</li>
          <li>Tenders@NITD</li>
          <li>Career Development Center@NITD</li>
          <li>Ministry of Education@NITD</li>
          <li>Downloads</li>
          <li>Archives</li>
        </ul>
      </div>
    </footer>
</>
  )
}

export default Home