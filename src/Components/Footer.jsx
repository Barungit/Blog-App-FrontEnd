import {
  faGoogle,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faMailBulk,
  faMobileScreen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className=" my-3 text-center text-lg-start text-white"
      style={{ backgroundColor: "#45526e" }}
    >
      <div class="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link to="/" className="text-decoration-none text-white">
                  LearnWithBlogs
                </Link>
              </h6>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link to="/about" className="text-decoration-none text-white">
                  About Us
                </Link>
              </h6>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link
                  to="/services"
                  className="text-decoration-none text-white"
                >
                  Services
                </Link>
              </h6>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link to="/blogs" className="text-decoration-none text-white">
                  All Blogs
                </Link>
              </h6>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link to="/blogs" className="text-decoration-none text-white">
                  New Feeds
                </Link>
              </h6>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link
                  to="/categories/6"
                  className="text-decoration-none text-white"
                >
                  Java
                </Link>
              </h6>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link
                  to="/categories/4"
                  className="text-decoration-none text-white"
                >
                  Python
                </Link>
              </h6>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link
                  to="/categories/2"
                  className="text-decoration-none text-white"
                >
                  Spring Boot
                </Link>
              </h6>
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <Link
                  to="/categories/8"
                  className="text-decoration-none text-white"
                >
                  JSP
                </Link>
              </h6>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>

              <p>
                <a href="#" class="text-white text-decoration-none">
                  Pravicy policy
                </a>
              </p>
              <p>
                <a href="#" class="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faAddressCard} /> Bihar, Patna 800001, IN
              </p>
              <p>
                <FontAwesomeIcon icon={faMailBulk} /> LearnWithBlogs@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> + 01 234 567 88
              </p>
              <p>
                <FontAwesomeIcon icon={faMobileScreen} /> + 01 234 567 89
              </p>

              <h6 class="text-uppercase mb-1 font-weight-bold mt-1">STATES</h6>
            </div>
          </div>
        </section>

        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-7 text-center text-md-start d-flex justify-content-between ">
              <div class="p-3">
                © 2023 Copyright:
                <a
                  class="text-white text-decoration-none"
                  href="http://127.0.0.1:8000/"
                >
                  LearnWithBlogs.com
                </a>
              </div>
            </div>
            <div class="col-md-5 col-lg-5 ml-lg-0 text-center text-md-end">
              <a
                class="btn btn-outline-light btn-floating m-1"
                className="text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                class="btn btn-outline-light btn-floating m-1"
                className="text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                class="btn btn-outline-light btn-floating m-1"
                className="text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                class="btn btn-outline-light btn-floating m-1"
                className="text-white"
                role="button"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
