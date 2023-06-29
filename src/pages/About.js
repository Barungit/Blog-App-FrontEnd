import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
      
    </Base>
  );
};

export default AboutUs;