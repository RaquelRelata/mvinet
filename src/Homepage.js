import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './mvinet-logo.png';
import img1 from './img1.jpg';
import img2 from './img22.jpeg';
import img3 from './img33.jpg';
import './homepage.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.fromSignUp) {
          setShowSignInModal(true);
        }
      }, [location]);
  const handleShowSignIn = () => setShowSignInModal(true);
  const handleCloseSignIn = () => setShowSignInModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="100" height="80" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/mvinet">MVINet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/startups">Startups</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">Events</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <button className="btn btn-primary" onClick={handleShowSignIn}>Signin</button>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar" style={{ backgroundColor: '#87cefa' }}>
        <div className="container-fluid d-flex justify-content-center">
          <span className="navbar-brand mb-0 p text-white text-center">
            "We are seeking ambitious individuals similar to your unwavering resolve to join our venture"
          </span>
        </div>
      </nav>

      <div className="d-flex justify-content-center mt-5">
        <img src={logo} alt="Logo" width="700" height="400" />
      </div>

     
      <div className={`modal fade ${showSignInModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In</h5>
              <button type="button" className="btn-close" onClick={handleCloseSignIn}></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-3">
                  <label>Username</label>
                  <input type="text" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <a href="/forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-primary btn-block w-100">Sign In</button>
              </form>
              <div className="text-center mt-3">
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide d-flex justify-content-center mt-4">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block mx-auto" style={{ width: '50%', height: 'auto' }} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block mx-auto" style={{ width: '50%', height: 'auto' }} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block mx-auto" style={{ width: '50%', height: 'auto' }} alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-center paragraph text-center">
        <p>
          MVINET, the MIMAROPA Ventures Network, is a collaborative consortium established under the Innovative Startup Act.
          <br />
          Comprising eight universities and led by the Department of Science and Technology-MIMAROPA, MVINET fosters innovation, <br /> supports startups, and drives economic development in the region.
          With a focus on establishing Technology Business Incubators (TBIs) <br />  within universities, MVINET aims to nurture 1000 techno-entrepreneurs and create 10,000 job opportunities. <br /> 
          Through mentorship, funding, and the MVINET platform, we empower startups to thrive in today's dynamic business landscape.
        </p>
      </div>

      <div className="text-end">
        <a className="btn btn-primary rounded-pill custom-btn-position" href="/">Learn More</a>
      </div>
    </>
  );
};

export default Header;
