import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
import Base from "../Components/Base";
import small from "../images/success.jpg";
import medium from "../images/beablogger.jpeg";
import team from "../images/team.jpg";

const AboutUs = () => {
  return (
    <Base>
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>
              Welcome to our vibrant and informative blogging platform! We are not just a team; we are a community of dedicated writers, creators, and thinkers who believe in the power of sharing knowledge and insights. Our mission is to bring valuable information and inspiration to your screens through our thoughtfully crafted blog posts.
            </p>
            <p>
              Our headquarters are nestled in the heart of <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              Patna City. Our city's dynamic energy fuels our curiosity and ignites our passion for exploring a diverse array of topics. We're continuously on the lookout for fresh and engaging subjects that resonate with our readers and spark conversations.
            </p>
            <p>
              We invite you to be an active part of our journey. Your thoughts, opinions, and ideas matter to us. If you ever find yourself pondering or have a topic in mind that you'd love to read about, don't hesitate to get in touch with us. Reach out via{" "}
              <FontAwesomeIcon icon={faEnvelope} /> info@ourwebsite.com or give us a call at{" "}
              <FontAwesomeIcon icon={faPhone} /> (123) 456-7890. We value your input and are excited to collaborate with you on shaping our blog's future.
            </p>
          </Col>
          <Col md={6}>
            <img className="my-5"
              src={team}
              alt="Team"
              width={600}
              height={350}
            />
          </Col>
        </Row>
      </Container>

      <div class="container-fluid py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src={medium}
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <p
                class=" pr-5"
                style={{
                  position: "relative",
                  display: "inline-block",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#17a2b8",
                }}
              >
                <span class="pr-2">Discover Our Blog</span>
              </p>
              <h1 class="mb-4">Your Source for Informative Blog Posts</h1>
              <p>
                Dive into our thought-provoking articles that cover a wide range of topics. Our mission is to provide you with well-researched, insightful, and engaging content that keeps you informed and entertained.
              </p>
              <div class="row pt-2 pb-4">
                <div class="col-6 col-md-4">
                  <img
                    class="img-fluid rounded"
                    src={small}
                    alt=""
                  />
                </div>
                <div class="col-6 col-md-8">
                  <ul class="list-inline m-0">
                    <li class="py-2 border-top border-bottom">
                      <FontAwesomeIcon
                        className="text-success fa-lg"
                        icon={faCheck}
                        style={{ backgroundColor: "yellow" }}
                      />{" "}
                      Engaging articles on various topics
                    </li>
                    <li class="py-2 border-bottom ">
                      <FontAwesomeIcon
                        className="text-success fa-lg"
                        icon={faCheck}
                        style={{ backgroundColor: "yellow" }}
                      />{" "}
                      Well-researched content for our readers
                    </li>
                    <li class="py-2 border-bottom">
                      <FontAwesomeIcon
                        className="text-success fa-lg"
                        icon={faCheck}
                        style={{ backgroundColor: "yellow" }}
                      />{" "}
                      A platform for sharing diverse perspectives
                    </li>
                  </ul>
                </div>
              </div>
              <a href="/blogs" class="btn btn-primary mt-2 py-2 px-4">
                Explore Our Posts
              </a>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AboutUs;
