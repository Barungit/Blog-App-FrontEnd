import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import Base from '../Components/Base';
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <Base>
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>We are a team of passionate developers who love building beautiful and functional web applications using the latest technologies.</p>
            <p>Our office is located in <FontAwesomeIcon icon={faMapMarkerAlt} /> New York City, and we are always looking for new and exciting projects to work on.</p>
            <p>If you have any questions or would like to discuss a project, please feel free to contact us at <FontAwesomeIcon icon={faEnvelope} /> info@ourcompany.com or <FontAwesomeIcon icon={faPhone} /> (123) 456-7890.</p>
          </Col>
          <Col md={6}>
            <img src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team" width={600} height={350}/>
          </Col>
        </Row>
      </Container>

      <div class="container-fluid py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-5 mb-lg-0" src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                </div>
                <div class="col-lg-7">
                    <p class=" pr-5" style={{
  position: 'relative',
  display: 'inline-block',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#17a2b8'}}><span class="pr-2">Learn About Us</span></p>
                    <h1 class="mb-4">Best School For Your Kids</h1>
                    <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <div class="row pt-2 pb-4">
                        <div class="col-6 col-md-4">
                            <img class="img-fluid rounded" src="https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1img/about-2.jpg" alt=""/>
                        </div>
                        <div class="col-6 col-md-8">
                            <ul class="list-inline m-0">
                                <li class="py-2 border-top border-bottom"><FontAwesomeIcon icon={faCheck} style={{backgroundColor:"#90ee90"}} /> Labore eos amet dolor amet diam</li>
                                <li class="py-2 border-bottom"><FontAwesomeIcon icon={faCheck} style={{backgroundColor:"#90ee90"}} /> Etsea et sit dolor amet ipsum</li>
                                <li class="py-2 border-bottom"><FontAwesomeIcon icon={faCheck} style={{backgroundColor:"#90ee90"}} /> Diam dolor diam elitripsum vero.</li>
                            </ul>
                        </div>
                    </div>
                    <a href="" class="btn btn-primary mt-2 py-2 px-4">Learn More</a>
                </div>
            </div>
        </div>
    </div>
      
    </Base>
  );
};

export default AboutUs;