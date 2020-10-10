import React from "react";
import Image from "react-bootstrap/Image";

const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2 className="featurette-heading">A Little Bit About Me</h2>
          <p className="lead">
            My name is Gerson Marroquin and I am currently enrolled in Full
            Stack course through the Universit of California, Riverside. I have
            always enjoyed being able to tranfer what I was picturing in my mind
            on to something visual. This page will show you what I have been
            working throughout the course and my growth. Please feel free to
            look around and if you have time, please view my{" "}
            <a href="https://drive.google.com/file/d/1NsAnlwNOHartxA5fiRa9Tk0hvZJMVDyf/view?usp=sharing">
              Resume
            </a>
            . Thank you and enjoy.
          </p>
        </div>
        <div className="col-md-5">
          <Image
            src={require("../images/me.jpg")}
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            alt="a man smiling"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
