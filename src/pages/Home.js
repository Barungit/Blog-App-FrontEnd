import { useEffect } from "react";
import Base from "../Components/Base";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import {
  faAws,
  faInstagram,
  faJava,
  faLinkedin,
  faPython,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Carousel.css";
import "./Home.css";
import pp1 from "../images/boy.jpg";
import pp2 from "../images/girl.jpg";
import pp3 from "../images/girl2.jpg";
import pp4 from "../images/girl3.jpg";

import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { loadAllPost } from "../services/post-service";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../services/helper";
import {
  faCar,
  faTrainTram,
  faUtensilSpoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    loadAllPost(true, 0, 5)
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

  const FeatureCard = ({ icon, title, description, link }) => (
    <div className="col-lg-4 col-md-6 pb-1">
      <Link to={link} className="text-decoration-none">
        <div
          className="d-flex bg-light shadow-sm border-top rounded mb-4"
          style={{ padding: "30px" }}
        >
          <FontAwesomeIcon
            icon={icon}
            className="h1 font-weight-normal text-primary mb-3"
          />
          <div className="pl-4 mx-2">
            <h4>{title}</h4>
            <p className="m-0">{description}</p>
          </div>
        </div>{" "}
      </Link>
    </div>
  );

  return (
    <Base>
      <div className="container-fluid bg-primary  ">
        <Row>
          <Col className="  mx-5 d-flex justify-content-center ">
            <div className="text-center">
              <h4
                className="my-4 text-white"
                style={{ fontFamily: "Georgia", fontSize: "40px" }}
              >
                Learn with Blogs
              </h4>
              <h1 className="display-5 font-weight-bold text-white my-font ">
                New Approach to Education
              </h1>
              <p
                className="text-white mb-4"
                style={{ fontFamily: "Georgia", fontSize: "18px" }}
              >
                Blogs are valuable learning tools as they offer diverse
                perspectives, expertise, and up-to-date information on various
                subjects. They enable continuous learning by providing
                accessible and concise content on complex topics. Blogs often
                cover practical tips, tutorials, and real-world examples,
                fostering a deeper understanding of subjects. Engaging with
                blogs enhances critical thinking and problem-solving skills.
                Additionally, they promote interactive discussions through
                comments and social media, creating a supportive learning
                community. Whether it's technology, science, self-improvement,
                or any other field, blogs serve as a convenient, user-friendly,
                and dynamic medium for individuals to expand their knowledge and
                stay informed.
              </p>
              <Button className="my-2 my-button">Learn More</Button>
            </div>
          </Col>
          <Col>
            <div className=" my-4">
              <img
                className="img-fluid"
                src="https://th.bing.com/th/id/OIG.jIEi7zHguh2eag1mLcb5?pid=ImgGn"
                style={{
                  height: 550,
                  borderRadius: 300,
                }}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* NEW FEEDS */}
      <div
        className="container d-flex justify-content-around"
        style={{ marginTop: "60px" }}
      >
        <div class="container">
          <div class="text-center pb-2">
            <p class="section-title px-5">
              <span class="px-2 " style={{ fontWeight: "bold" }}>
                Our Blogs
              </span>
            </p>
            <h1 class="mb-4">Ckeck Our Latest Blogs</h1>
          </div>
        </div>
      </div>

      <Row className="my-1 mx-4">
        <Col>
          <Carousel
            showThumbs={false} // Disable thumbnail navigation
            showIndicators={true} // Show indicators
            infiniteLoop={true} // Enable infinite loop
            autoPlay={true} // Enable auto-play
            interval={3000} // Set the interval between slides (in milliseconds)
            transitionTime={500} // Set the transition duration (in milliseconds)
            emulateTouch={true} // Enable touch swipe // Stop auto-play on hover
            stopOnHover={true}
            className="custom-carousel  "
          >
            {carouselItems.map((item) => (
              <div key={item.key} className="carousel-card">
                <a
                  href={"/blogs/" + item.bid}
                  target="_blank"
                  style={{ color: "black" }}
                  rel="noopener noreferrer"
                >
                  <Card className="hp_carou">
                    <CardImg
                      top
                      src={BASE_URL + "/blogs/image/" + item.picname}
                      alt={item.altText}
                      onError={handleImageError}
                    />
                    <CardImgOverlay>
                      <CardTitle className="display-4">{item.title}</CardTitle>
                      {/* <CardText className="text-muted" dangerouslySetInnerHTML={{__html:item.content.substring(0,5000)}}/> */}
                      <CardSubtitle className="legend">
                        {item.category.categoryTitle}
                      </CardSubtitle>
                    </CardImgOverlay>
                  </Card>
                </a>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Popular Categories */}

      <div class="text-center" style={{ marginTop: "60px" }}>
        <p class="section-title px-5">
          <span class="px-2 " style={{ fontWeight: "bold" }}>
            Our Stacks
          </span>
        </p>
        <h1 class="mb-4">Check Our Trending Tags</h1>
      </div>
      <div className="container-fluid pt-2">
        <div className="container pb-3">
          <div className="row">
            <FeatureCard
              icon={faJava}
              title="Java"
              description="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
              link="/categories/6"
            />
            <FeatureCard
              icon={faPython}
              title="Python"
              description="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
              link="/categories/4"
            />
            <FeatureCard
              icon={faAws}
              title="AWS"
              description="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
              link="/categories/6"
            />
            <FeatureCard
              icon={faCar}
              title="Safe Transportation"
              description="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
              link="/categories/6"
            />
            <FeatureCard
              icon={faUtensilSpoon}
              title="Healthy food"
              description="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
              link="/categories/6"
            />
            <FeatureCard
              icon={faTrainTram}
              title="Educational Tour"
              description="Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero..."
              link="/categories/6"
            />
          </div>
        </div>
      </div>

      {/* OUR BLOGGERS */}
      <div className="container d-flex justify-content-around my-5">
        <div class="container">
          <div class="text-center pb-2">
            <p class="section-title px-5">
              <span class="px-2 ">Our Contributors</span>
            </p>
            <h1 class="mb-4">Meet Our Bloggers</h1>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4 "
                style={{ borderRadius: "50%" }}
              >
                <img
                  class="img-fluid w-100"
                  src={pp1}
                  alt=""
                  style={{ height: "250px", width: "150px" }}
                />
                <div class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "50%" }}
              >
                <img class="img-fluid w-100" src={pp2} alt="" />
                <div class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "50%" }}
              >
                <img
                  class="img-fluid w-100"
                  src={pp3}
                  alt=""
                  style={{ height: "250px", width: "150px" }}
                />
                <div class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
            <div class="col-md-6 col-lg-3 text-center team mb-5">
              <div
                class="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "50%" }}
              >
                <img
                  class="img-fluid w-100"
                  src={pp4}
                  alt=""
                  style={{ height: "250px", width: "150px" }}
                />
                <div class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center mr-2 px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    class="btn btn-outline-light text-center px-0"
                    style={{ width: "38px", height: "38px" }}
                    href="#"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
export default Home;
