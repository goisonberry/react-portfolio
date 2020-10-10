import React from "react";

const Footer = () => {
  return (
    <footer className="blog-footer">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="assets/portfolio.html">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="modal"
            date-target="#exampleModal"
            href="#exampleModal"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
