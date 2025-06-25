import React, { Component } from 'react';
import './Footer.css'; // Ensure you create and style this CSS file

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-container">
            {/* ABOUT Section */}
            <div className="footer-column">
              <h6>ABOUT</h6>
              <ul>
                <li><a href="https://www.flipkart.com/contact-us">Contact Us</a></li>
                <li><a href="https://www.flipkart.com/about">About Us</a></li>
                <li><a href="https://www.flipkart.com/careers">Careers</a></li>
                <li><a href="https://stories.flipkart.com/">Flipkart Stories</a></li>
                <li><a href="https://www.flipkart.com/press">Press</a></li>
                <li><a href="https://www.flipkart.com/corporate">Corporate Information</a></li>
              </ul>
            </div>

            {/* GROUP COMPANIES Section */}
            <div className="footer-column">
              <h6>GROUP COMPANIES</h6>
              <ul>
                <li><a href="https://www.myntra.com/">Myntra</a></li>
                <li><a href="https://www.cleartrip.com/">Cleartrip</a></li>
                <li><a href="https://shopsy.flipkart.com/">Shopsy</a></li>
              </ul>
            </div>

            {/* HELP Section */}
            <div className="footer-column">
              <h6>HELP</h6>
              <ul>
                <li><a href="https://www.flipkart.com/payments">Payments</a></li>
                <li><a href="https://www.flipkart.com/shipping">Shipping</a></li>
                <li><a href="https://www.flipkart.com/cancellation-returns">Cancellation & Returns</a></li>
                <li><a href="https://www.flipkart.com/faq">FAQ</a></li>
              </ul>
            </div>

            {/* CONSUMER POLICY Section */}
            <div className="footer-column">
              <h6>CONSUMER POLICY</h6>
              <ul>
                <li><a href="https://www.flipkart.com/cancellation-returns">Cancellation & Returns</a></li>
                <li><a href="https://www.flipkart.com/terms-of-use">Terms Of Use</a></li>
                <li><a href="https://www.flipkart.com/security">Security</a></li>
                <li><a href="https://www.flipkart.com/privacy">Privacy</a></li>
                <li><a href="https://www.flipkart.com/sitemap">Sitemap</a></li>
                <li><a href="https://www.flipkart.com/grievance-redressal">Grievance Redressal</a></li>
                <li><a href="https://www.flipkart.com/epr-compliance">EPR Compliance</a></li>
              </ul>
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>

            {/* Mail Us Section */}
            <div className="footer-column-address">
              <h6>Mail Us:</h6>
              <p>
                Flipkart Internet Private Limited, <br />
                Buildings Alyssa, Begonia & <br />
                Clove Embassy Tech Village, <br />
                Outer Ring Road, Devarabeesanahalli Village, <br />
                Bengaluru, 560103, <br />
                Karnataka, India
              </p>
              {/* Social Icons */}
              <h6 className="social-title">Social:</h6>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Registered Office Address */}
            <div className="footer-column-address">
              <h6>Registered Office Address:</h6>
              <p>
                Flipkart Internet Private Limited, <br />
                Buildings Alyssa, Begonia & <br />
                Clove Embassy Tech Village, <br />
                Outer Ring Road, Devarabeesanahalli Village, <br />
                Bengaluru, 560103, <br />
                Karnataka, India <br />
                CIN : U51109KA2012PTC066107 <br />
                Telephone: <a href="tel:044-45614700">044-45614700</a> / <a href="tel:044-87415800">044-87415800</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-container bottom-container">
            <a href="https://seller.flipkart.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-briefcase"></i> Become a Seller
            </a>
            <a href="https://advertise.flipkart.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-bullhorn"></i> Advertise
            </a>
            <a href="https://giftcards.flipkart.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-gift"></i> Gift Cards
            </a>
            <a href="https://www.flipkart.com/help-center" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-question-circle"></i> Help Center
            </a>
            <span>© 2007-2025 Flipkart.com</span>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment Methods" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;