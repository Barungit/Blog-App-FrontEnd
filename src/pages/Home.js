import { useEffect } from "react";
import Base from "../Components/Base";
import NewFeed from "../Components/NewFeed";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './Carousel.css';

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

const Home = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    loadAllPost(0, 5)
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
      <div>
        <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
          <Row>
            <Col className="border  mx-5 ">
              <div class="col-lg-6 text-center position-relative border">
                <h4 className="my-4 text-white position-relative border">
                  Kids Learning Center
                </h4>
                <h1 className="display-3 font-weight-bold text-white position-relative border">
                  New Approach to Kids Education
                </h1>
                <p className="text-white mb-4 position-relative border">
                  Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est
                  amet sed sit. Ipsum dolor no justo dolor et, lorem ut dolor
                  erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore
                  sed stet et est justo dolore.
                </p>
                <Button className="position-relative border">Learn More</Button>
              </div>
            </Col>
            <Col>
              <img
                className="img-fluid mt-5 border"
                src="https://picsum.photos/900/180"
                style={{
                  height: 500,
                  borderRadius: 60,
                }}
                alt=""
              />
            </Col>
          </Row>
        </div>
        <Row><Col className="carousel-col">
        <Carousel  showThumbs={false} // Disable thumbnail navigation
        showIndicators={true} // Show indicators
        infiniteLoop={true} // Enable infinite loop
        autoPlay={true} // Enable auto-play
        interval={5000} // Set the interval between slides (in milliseconds)
        transitionTime={500} // Set the transition duration (in milliseconds)
        emulateTouch={true} // Enable touch swipe // Stop auto-play on hover
        stopOnHover={true}
        className="custom-carousel"
         >
        {carouselItems.map((item) => (
          <div key={item.key} className="carousel-card" >
             <a href={'/blogs/'+item.bid} target="_blank" style={{color: 'black'}} rel="noopener noreferrer">
          <Card className="hp_carou">
            <CardImg top src={item.picname} alt={item.altText} onError={handleImageError} />
            <CardImgOverlay >
              <CardTitle className="display-4">{item.title}</CardTitle>
              <CardText className="text-muted" dangerouslySetInnerHTML={{__html:item.content.substring(0,500)}}/>
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

        </Row>
      </div>
    </Base>
  );
};
export default Home;
// onClick={()=><Link to={'/blogs/'+item.bid}></Link>}