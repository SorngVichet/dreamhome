import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer
        id="site-footer"
        style={{ height: "fit-content", width: "100%" }}
        className="p-3 text-white bg-black"
      >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-12  items-center flex flex-col col-md-6 col-lg-3 mb-4">
                <h4>About Dream Home</h4>
                <p>
                  This Web has a lots of kind of home for you rent or buy. You
                  will have luxury and modern lives with home you rent or buy,
                  cause we have make it by highest focus.
                </p>
                <p>
                  Find your dream home today, explore apartements, villas, and
                  hotels for rent or sale now!
                </p>
                <div className="social-icons mt-2 flex w-full gap-3 items-center justify-center text-2xl">
                  <a href="https://www.facebook.com/povchet120209240707?mibextid=wwXIfr&mibextid=wwXIfr">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://youtube.com/@sorngvichet5727?si=jj0qMdlpjC-IFV1A"
                    title="YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5>Quick Links</h5>
                <div className="footer-links flex flex-col ">
                  <NavLink to="/dreamhome" className=" text-decoration-none">
                    Home
                  </NavLink>
                  <NavLink
                    to="/dreamhome/gallery"
                    className=" text-decoration-none"
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    to="/dreamhome/service"
                    className=" text-decoration-none"
                  >
                    Service
                  </NavLink>
                  <NavLink
                    to="/dreamhome/about"
                    className=" text-decoration-none"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/dreamhome/contact"
                    className=" text-decoration-none"
                  >
                    Contact
                  </NavLink>
                </div>
              </div>

              <div className="col-12 col-md-6 flex flex-col items-start col-lg-3 mb-4">
                <h5 className=" w-full flex justify-center">Contact Us</h5>
                <div className="contact-item flex gap-2">
                  <i className="fas fa-phone"></i>
                  <span>+855 81-981-012</span>
                </div>
                <div className="flex gap-2 contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>sorngvichet168@gmail.com</span>
                </div>
                <div className="flex gap-2 contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5>Subscribe</h5>
                <p>Get updates on new arrivals and special offers.</p>
                <form
                  id="subscribe-form"
                  className="subscribe-input"
                  onsubmit="return handleSubscribe(event);"
                >
                  <input
                    type="email"
                    id="subscriber-email"
                    placeholder="Email address"
                    required
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
                <div
                  id="subscribe-msg"
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    color: "#bfe7c7",
                    display: " none",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; <span id="year"></span> The-Dream-Home. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
