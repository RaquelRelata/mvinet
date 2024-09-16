import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './mvinet-logo.png';
import './homepage.css';
import { NavLink } from 'react-router-dom';
import dostlogo from './img/Dost-logo.png';
import e3hubslogo from './img/E3hubs logo.png';

const Mvinetheader = () => {
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
                                <NavLink 
                                    className="nav-link" 
                                    to="/mvinet" 
                                    style={({ isActive }) => ({
                                        textDecoration: isActive ? 'underline' : 'none'
                                    })}
                                >
                                    MVINet
                                </NavLink>
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
                                <a className="btn btn-primary" href="/signin">Signin</a>
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
            <div style={{ backgroundColor: '#d3d3d3', width: '100vw', margin: '0', padding: '20px 0' }}>
    <div className="container mt-5">
        <div className="text-center mb-4">
            <h1 style={{ fontSize: '1.5rem', color: 'black' }}>Main Investors</h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* E3HUBS Section */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={e3hubslogo} alt="E3HUBS Logo" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                <div>
                    <h2 style={{ fontSize: '1rem', color: '#100c08' }}>E3HUBS</h2>
                    <p style={{ fontSize: '1rem', color: '#242124' }}>
                        E3HUBS is a global entrepreneurial network that accelerates<br />
                        startups by offering mentorship, funding, and networking,<br />
                        transforming innovative ideas into successful businesses.
                    </p>
                </div>
            </div>

            {/* DOST Section */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '1rem', color: '#100c08' }}>DOST</h2>
                    <p style={{ fontSize: '1rem', color: '#242124' }}>
                        The Department of Science and Technology (DOST)<br />
                        in the Philippines supports innovative startups with funding,<br />
                        research, and development to boost technological growth<br />
                        and economic productivity.
                    </p>
                </div>
                <img src={dostlogo} alt="DOST Logo" style={{ width: '100px', height: '100px', marginLeft: '20px' }} />
            </div>
        </div>
    </div>
</div>


        </>
    );
};

export default Mvinetheader;
