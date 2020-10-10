import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="blog-footer">
      <ul className="nav justify-content-center">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            About <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
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
