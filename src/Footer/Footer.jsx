import React from "react";

import "./footer.css";
import phone from "../assign/media-logo/phone.svg";
import instagram from "../assign/media-logo/instagram.svg";
import facebook from "../assign/media-logo/facebook.svg";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer-block">
        <div className="footer-block__container">
          <div className="footer-block__logo">
            <a href="1" className="logo _footer">
              WINE SHOP
            </a>
          </div>
          <nav className="footer-block__menu">
            <ul className="menu__items">
              <li className="menu_item">
                <a href="1" className="menu__link">
                  <img className="link-media" src={phone} alt="phone" />
                </a>
              </li>
              <li className="menu_item">
                <a href="1" className="menu__link">
                  <img className="link-media" src={instagram} alt="instagram" />
                </a>
              </li>
              <li className="menu_item">
                <a href="1" className="menu__link">
                  <img className="link-media" src={facebook} alt="facebook" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-copy">Copyright - WINE SHOP 2022</div>
      </footer>
    </div>
  );
}

export default Footer;
