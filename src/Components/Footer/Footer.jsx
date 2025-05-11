import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Explore Section */}

      <section className="explore-section">
        <div className="container">
          <div className="explore-section-main col-100">
            <div>
              <h2>Explore options near me</h2>
            </div>

            <div className="explore-selection">
              <select className="selectors" name="">
                <option value="Popular cuisines near me">
                  Popular cuisines near me
                </option>
              </select>
              <select className="selectors" name="" id="">
                <option value="Popular restaurant types near me">
                  Popular restaurant types near me
                </option>
              </select>
              <select className="selectors" name="" id="">
                <option value="Top Restaurant Chains">
                  Top Restaurant Chains
                </option>
              </select>
              <select className="selectors" name="" id="">
                <option value="Cities We Deliver To">
                  Cities We Deliver To
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer>
        <div className="container">
          <div className="footer-header flex jc-sb">
            <div className="footer-logo col-50">
              <img
                className="footer-logo-img"
                src="/public/assets/Asset_0.avif"
                alt="Logo"
              />
            </div>
            <div className="footer-selection flex col-50">
              <select className="footer-selector" name="Select Country" id="">
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="Ireland">Ireland</option>
                <option value="Italy">Italy</option>
              </select>
              <select className="footer-selector" name="Select language" id="">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Marathi">Marathi</option>
                <option value="Telugu">Telugu</option>
                <option value="Italian">Italian</option>
                <option value="Indonasion">Indonasion</option>
              </select>
            </div>
          </div>

          {/* Footer body Content */}

          <section className="footer-body-content flex jc-sb">
            <div className="information flex col-20">
              <h3 className="footer-header">About Zomato</h3>
              <Link to="#">Who We Are</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Work With us</Link>
              <Link to="#">Investor Relations</Link>
              <Link to="#">Report Fraud</Link>
              <Link to="#">Contact Us</Link>
            </div>
            <div className="information flex col-20">
              <h3 className="footer-header">ZOMAVERSE</h3>
              <Link to="#">Zomato</Link>
              <Link to="#">Blinkit</Link>
              <Link to="#">Feeding India</Link>
              <Link to="#">Hyperpure</Link>
              <Link to="#">Zomaland</Link>
            </div>
            <div className="col-20">
              <div className="information flex">
                <h3 className="footer-header">FOR RESTAURANTS</h3>
                <Link to="#">Partner With Us</Link>
                <Link to="#">Apps For You</Link>
                <h3 className="footer-header header2">FOR ENTERPRISES</h3>
                <Link to="#">Zomato For Enterprises</Link>
              </div>
            </div>
            <div className="col-20">
              <div className="information flex">
                <h3 className="footer-header">LEARN MORE</h3>
                <Link to="#">Privacy</Link>
                <Link to="#">Security</Link>
                <Link to="#">Terms</Link>
                <Link to="#">Sitemap</Link>
              </div>
            </div>
            <div className="information flex col-20">
              <h3 className="footer-header">SOCIAL LINKS</h3>
              <div className="footer-header footer-social-links">
                <Link to="#">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </Link>
              </div>
              <div className="download flex">
                <Link to="#">
                  <img
                    className="download-img"
                    src="/public/assets/Google Play.png"
                    alt="Google Play"
                  />
                </Link>

                <Link to="#">
                  <img
                    className="download-img"
                    src="/public/assets/App Store.png"
                    alt="App Store"
                  />
                </Link>
              </div>
            </div>
          </section>
          <hr />
          <div className="footer-bottom">
            <p>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2023 © Zomato™
              Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll-Button */}

      <div className="scrollup">
        <i className="fa-solid fa-chevron-up scroll-icon"></i>
      </div>
    </>
  );
}
