import React, { Fragment } from "react";

function About() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center about-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="font-big text-red slide-in-top">About me</h1>
                <hr></hr>
                <p className="slide-in-bottom">
                I am a passionate Web Developer , Coder  with a strong drive for continuous
                learning. My goal is to explore and master cutting-edge technologies
                that can enhance existing automation processes and drive positive
                change. <br></br>
                </p>
                <p className="slide-in-bottom">
                   I am working as a Frontend developer intern at Muvitaab Software Solutions Pvt Ltd , Visakhapatnam India 
                   I am  willing  to work on challenging and diverse projects with the latest
                  technologies.<br></br>
                  
                </p>
                <p className="slide-in-bottom">
                  <br></br>
                  The technology I've worked on :{" "}
                  <span className="text-red ls-2">
                     <br></br>
                    Java , Python, MySQL, Html, Css, Js, Bootstrap{" "}
                  </span>
                </p>
                <p className="slide-in-bottom">
                  Currently Learning React Js Library
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid"
                src="./RTask06/images/nomad-amico.png"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
