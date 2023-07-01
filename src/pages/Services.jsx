import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Base from '../Components/Base';
import { loadAllPost } from '../services/post-service';

const Services = () => {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [carouselItems, setCarouselItems] = React.useState([]);

  React.useEffect(() => {
    loadAllPost(0, 5)
      .then((data) => {
        console.log(data.content);
        setCarouselItems(data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/posts', { title, content });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Base>
      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="display-4">Blogging Service</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ac elit quis lorem ullamcorper pharetra. Sed vel elit vitae
                augue ultricies bibendum.
              </p>
            </Col>
            <Col md={6}>
              <FontAwesomeIcon icon={faBlog} size="6x" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container  className="py-5">
        <Row>
          <Col md={6}>
            <h2>Demand a new blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group my-2">
                <label htmlFor="title" style={{fontSize:"20px", fontWeight:"bold"}}>Topic:</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <label style={{fontSize:"20px", fontWeight:"bold"}} htmlFor="content">What key explanations should the blog include:</label>
                <textarea
                  type="textarea"
                  className="form-control my-2"
                  id="content"
                  style={{height: "200px"}}
                  // value={content}
                  onChange={(value) => setContent(value)}
                />
              </div>
              <button type="submit" className="btn btn-primary my-2">
                Submit
              </button>
            </form>
          </Col>
          <Col md={6} >
            <h2>Recent posts</h2>
            <Carousel showThumbs={false}
            infiniteLoop={true} // Enable infinite loop
            autoPlay={true} // Enable auto-play
            interval={5000} // Set the interval between slides (in milliseconds)
            transitionTime={500} // Set the transition duration (in milliseconds)
            emulateTouch={true} // Enable touch swipe // Stop auto-play on hover
            stopOnHover={true}>
            {carouselItems.map((item) => (
              <div>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{__html:item.content.substring(0,2000)}}></p>
              </div>
            ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
      </Base>
    </div>
  );
};

export default Services;