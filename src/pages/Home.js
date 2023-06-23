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
import { BASE_URL } from "../services/helper";

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
        <div className="container-fluid bg-primary  ">
          <Row>
            <Col className="  mx-5 d-flex justify-content-center ">
              <div className="text-center">
                <h4 className="my-4 text-white" style={{fontFamily:'Georgia' ,fontSize:'46px'}}>
                  Kids Learning Center
                </h4>
                <h1 className="display-3 font-weight-bold text-white my-font ">
                  New Approach to Kids Education
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
                  height: 500,
                  borderRadius: 60,
                }}
                alt=""
              />
              </div>
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
            <CardImg top src={BASE_URL+ '/blogs/image/' + item.picname} alt={item.altText} onError={handleImageError} />
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
        <div class="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="" class="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{fontsize: 40, lineheight: 40}}>
                    <i class="flaticon-043-teddy-bear"></i>
                    <span class="text-white">KidKinder</span>
                </a>
                <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                <div class="d-flex justify-content-start mt-4">
                    {/* <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                        style="width: 38px; height: 38px;" href="#"><i class="fab fa-instagram"></i></a> */}
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h3 class="text-primary mb-4">Get In Touch</h3>
                <div class="d-flex">
                    <h4 class="fa fa-map-marker-alt text-primary"></h4>
                    <div class="pl-3">
                        <h5 class="text-white">Address</h5>
                        <p>123 Street, New York, USA</p>
                    </div>
                </div>
                <div class="d-flex">
                    <h4 class="fa fa-envelope text-primary"></h4>
                    <div class="pl-3">
                        <h5 class="text-white">Email</h5>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div class="d-flex">
                    <h4 class="fa fa-phone-alt text-primary"></h4>
                    <div class="pl-3">
                        <h5 class="text-white">Phone</h5>
                        <p>+012 345 67890</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h3 class="text-primary mb-4">Quick Links</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Classes</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Teachers</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Blog</a>
                    <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
            </div>
        </div>
        <div class="container-fluid pt-5" >
            <p class="m-0 text-center text-white">
                &copy; <a class="text-primary font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed
                by
                <a class="text-primary font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
            </p>
        </div>
    </div>
        </Row>
      </div>
    </Base>
  );
};
export default Home;
