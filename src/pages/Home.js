import { useEffect } from "react";
import Base from "../Components/Base";
import NewFeed from "../Components/NewFeed";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { faGoogle, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Carousel.css';
import pp1 from '../images/boy.jpg';
import pp2 from '../images/girl.jpg';
import pp3 from '../images/girl2.jpg';
import pp4 from '../images/girl3.jpg';
import pp5 from '../images/smile.jpg';

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  UncontrolledCarousel,
} from "reactstrap";
import CategorySideMenu from "../Components/CategorySideMenu";
import { loadAllPost } from "../services/post-service";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../services/helper";
import { faAddressCard, faMailBulk, faMobileScreen, faPhone, faWalkieTalkie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Components/Footer";

const Home = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    loadAllPost(true,0, 5)
      .then((data) => {
        console.log(data.content);
        setCarouselItems(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleImageError = (event) => {
    event.target.src = "https://picsum.photos/900/180"; // Replace 'fallback-image-url' with your secondary image URL
  };
  return (
    <Base>
      
        <div className="container-fluid bg-primary  ">
          <Row>
            <Col className="  mx-5 d-flex justify-content-center ">
              <div className="text-center">
                <h4 className="my-4 text-white" style={{fontFamily:'Georgia' ,fontSize:'46px'}}>
                  Learn with Blogs
                </h4>
                <h1 className="display-3 font-weight-bold text-white my-font ">
                  New Approach to Education
                </h1>
                <p className="text-white mb-4" style={{fontFamily:'Lucida Handwriting' ,fontSize:'26px'}}>
                  Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est
                  amet sed sit. Ipsum dolor no justo dolor et, lorem ut dolor
                  erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore
                  sed stet et est justo dolore.
                </p>
                <Button className="my-2 my-button" >Learn More</Button>
              </div>
            </Col>
            <Col>
            <div className=" my-4">
              <img
                className="img-fluid"
                src="https://picsum.photos/900/180"
                style={{
                  height: 450,
                  borderRadius: 300,
                }}
                alt=""
              />
              </div>
            </Col>
          </Row>
        </div>
        <h1 className="mx-3" style={{ color: '#333', fontSize: '34px', fontWeight: 'bold', margin: '20px' }}>New Feeds:</h1>
        <Row className="my-4 mx-4"><Col >
        <Carousel  showThumbs={false} // Disable thumbnail navigation
        showIndicators={true} // Show indicators
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        interval={5000} // Set the interval between slides (in milliseconds)
        transitionTime={500} // Set the transition duration (in milliseconds)
        emulateTouch={true} // Enable touch swipe // Stop auto-play on hover
        stopOnHover={true}
        className="custom-carousel border border-dark "
         >
        {carouselItems.map((item) => (
          <div key={item.key} className="carousel-card" >
             <a href={'/blogs/'+item.bid} target="_blank" style={{color: 'black'}} rel="noopener noreferrer">
          <Card className="hp_carou">
            <CardImg top src={BASE_URL+ '/blogs/image/' + item.picname} alt={item.altText} onError={handleImageError} />
            <CardImgOverlay >
              <CardTitle className="display-4">{item.title}</CardTitle>
              {/* <CardText className="text-muted" dangerouslySetInnerHTML={{__html:item.content.substring(0,5000)}}/> */}
              <CardSubtitle className="legend">{item.category.categoryTitle}</CardSubtitle>
              
            </CardImgOverlay>
          </Card>
          </a>
        </div>
        ))}
      </Carousel>
      </Col>
        </Row>

      <Row>
      <h1 className="mx-3" style={{ color: '#333', fontSize: '34px', fontWeight: 'bold', margin: '20px' }}>Our Bloggers:</h1>
      <div className="container d-flex justify-content-around">
  <div className="card shadow d-flex justify-content-center align-items-center" style={{ width: '180px', height: '180px', borderRadius: '50%', boxShadow: 'inset 0 0 10px white' }}>
    <img src={pp1} className="card-img-top" alt="Image" style={{ height: '150px', width: '150px', borderRadius:'75px' }} />
  </div>

  <div className="card shadow d-flex justify-content-center align-items-center" style={{width: '180px', height: '180px', borderRadius: '50%', boxShadow: 'inset 0 0 10px white' }}>
    <img src={pp4} className="card-img-top" alt="Image" style={{ height: '150px', width: '150px', borderRadius:'75px'}} />
  </div>

  <div className="card shadow d-flex justify-content-center align-items-center" style={{width: '180px', height: '180px', borderRadius: '50%', boxShadow: 'inset 0 0 10px white' }}>
    <img src={pp3}  className="card-img-top" alt="Image" style={{  height: '150px', width: '150px', borderRadius:'75px' }} />
  </div>

  <div className="card shadow d-flex justify-content-center align-items-center" style={{ width: '180px', height: '180px', borderRadius: '50%', boxShadow: 'inset 0 0 10px white' }}>
    <img src={pp2}  className="card-img-top" alt="Image" style={{ height: '150px', width: '150px', borderRadius:'75px' }} />
  </div>

  <div className="card shadow d-flex justify-content-center align-items-center" style={{width: '180px', height: '180px', borderRadius: '50%', boxShadow: 'inset 0 0 10px white' }}>
    <img src={pp5} className="card-img-top" alt="Image" style={{ height: '150px', width: '150px', borderRadius:'75px'}} />
  </div>
</div>

      </Row>
       
    </Base>
  );
};
export default Home;
