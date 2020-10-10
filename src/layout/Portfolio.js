import React from "react";
import Image from "react-bootstrap/Image";

const Portfolio = () => {
  return (
    /* <!-- Beginning of Project Cards --> */
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        {/* <!-- Alexandria Card --> */}
        <div className="col mb-4">
          <div className="card h-100">
            <Image
              src={require("../images/Alexandria-logo.png")}
              className="card-img-top"
              alt="the word Alexandria"
            />
            <div className="card-body">
              <h5 className="card-title">A Small Property Management Team</h5>
              <p className="card-text">
                Alexandria is user-friendly{" "}
                <a href="https://mysterious-river-09583.herokuapp.com/">
                  website
                </a>{" "}
                that easily gives rental property owners a way to manage their
                properties without the hasstle of having to deal with a property
                management agency.
              </p>
            </div>
            <div className="card-footer text-center">
              <a
                href="https://github.com/jeanhern81/Alexandria"
                className="card-link btn btn-primary"
              >
                Alexandria
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Weather Dashboard Card --> */}
        <div className="col mb-4">
          <div className="card h-100">
            <Image
              src={require("../images/homePage.PNG")}
              className="card-img-top"
              alt="the word Note Taker"
            />
            <div className="card-body">
              <h5 className="card-title">For the busy worker</h5>
              <p className="card-text">
                This application is to assist a user with keeping track of their
                thoughts.
              </p>
            </div>
            <div className="card-footer text-center">
              <a
                href="https://github.com/goisonberry/Note-Taker"
                className="card-link btn btn-primary"
              >
                Note Taker
              </a>
            </div>
          </div>
        </div>
        {/* <!-- NoteTaker --> */}
        <div className="col mb-4">
          <div className="card h-100">
            <Image
              src={require("../images/weatherDashboardLogo.PNG")}
              className="card-img-top"
              alt="the words weather dashboard"
            />
            <div className="card-body">
              <h5 className="card-title">For the constant traveler</h5>
              <p className="card-text">
                Allow travelers to utilize this application to see the weather
                for multiple cities in order for them to plan their travel
                accordingly.
              </p>
            </div>
            <div className="card-footer text-center">
              <a
                href="https://goisonberry.github.io/weather-dashboard/"
                className="card-link btn btn-primary"
              >
                Weather Dashboard
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Work Calendar Card --> */}
        <div className="col mb-4">
          <div className="card h-100">
            <Image
              src={require("../images/workCalendarLogo.PNG")}
              class="card-img-top"
              alt="the words work calendar"
            />
            <div className="card-body">
              <h5 className="card-title">For the Busy Body</h5>
              <p className="card-text">
                The purpose of this application is to allow an employee to keep
                track of his daily tasks. It will allow the use to know what
                time blocks have past, what time block they are currently in and
                what time blocks are left for the working day.
              </p>
            </div>
            <div className="card-footer text-center">
              <a
                href="https://goisonberry.github.io/WorkCalendar/"
                className="card-link btn btn-primary"
              >
                Work Calendar
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Code Quiz Card --> */}
        <div className="col mb-4">
          <div className="card h-100">
            <Image
              src={require("../images/codeQuizLogo.PNG")}
              className="card-img-top"
              alt="the words the ultimate code quiz"
            />
            <div className="card-body">
              <h5 className="card-title">Test Your Might.</h5>
              <p className="card-text">
                The purpose to of this project is to test the knowledge of users
                and store their high scores.
              </p>
            </div>
            <div className="card-footer text-center">
              <a
                href="https://goisonberry.github.io/CodeQuiz/index.html"
                className="card-link btn btn-primary"
              >
                Code Quiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
