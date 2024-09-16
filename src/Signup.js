import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkedAlt, FaCity, FaFileUpload, FaIdCard } from 'react-icons/fa';
import './Signup.css';
import logo from './mvinet-logo.png';
import { useNavigate } from 'react-router-dom';


function SignupForm() {
  const [formData, setFormData] = useState({
    userType: 'incubatees',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    email: '',
    phoneNumber: '',
    region: '',
    city: '',
    password: '',
    confirmPassword: '',
    fileUpload: null,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

    const handleCancel = () => {
        navigate('/');
    };

  const handleSignInClick = () => {
  navigate("/", { state: { fromSignUp: true } }); // Pass state to indicate the sign-in modal should be shown
};


  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.region) newErrors.region = 'Region is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    
    if (formData.userType === 'investors' && !formData.fileUpload)
      newErrors.fileUpload = 'Please upload a valid ID';
    if (formData.userType === 'incubatees' && !formData.fileUpload)
      newErrors.fileUpload = 'Please upload a proposal';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

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
                       
                    </div>
                </div>
            </nav>

    <div className="container mt-5" style={{ backgroundColor: '#0194CF', padding: '30px', borderRadius: '8px' ,maxWidth: '600px'}}>
      <h2 className="text-center mb-4 text-white">Sign Up</h2>
      <p className='text-center text-white'>It's quick and easy</p>
      <form onSubmit={handleSubmit} className="text-white">
        {/* User Type Selection */}
        <div className="form-group">
          <label>User Type:</label>
          <select
            className="form-control"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value="incubatees">Incubatees</option>
            <option value="investors">Investors</option>
          </select>
        </div>

      
        <div className="form-group">
  <label>First Name</label>
  <div className="input-group">
    <div className="input-group-prepend d-flex align-items-center">
      <span className="input-group-text icon-large">
        <FaUser />
      </span>
    </div>
    <input
      type="text"
      className="form-control"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleInputChange}
    />
  

          </div>
          {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
        </div>

        
        <div className="form-group">
          <label>Middle Name</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaUser />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        
        <div className="form-group">
          <label>Last Name</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaUser />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
        </div>

      
        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

       
        <div className="form-group">
          <label>Email</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaEnvelope />
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaPhone />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber}</p>}
        </div>

        
        <div className="form-group">
          <label>Region</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaMapMarkedAlt />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="region"
              placeholder="Region"
              value={formData.region}
              onChange={handleInputChange}
            />
          </div>
          {errors.region && <p className="text-danger">{errors.region}</p>}
        </div>

        
        <div className="form-group">
          <label>City</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaCity />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          {errors.city && <p className="text-danger">{errors.city}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaLock />
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <div className="input-group">
            <div className="input-group-prepend d-flex align-items-center">
              <span className="input-group-text icon-large">
                <FaLock />
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
        </div>

        {formData.userType === 'investors' && (
          <div className="form-group">
            <label>Upload Valid ID:</label>
            <div className="input-group">
              <div className="input-group-prepend d-flex align-items-center">
                <span className="input-group-text">
                  <FaIdCard />
                </span>
              </div>
              <input
                type="file"
                className="form-control-file"
                name="fileUpload"
                onChange={handleInputChange}
              />
            </div>
            {errors.fileUpload && <p className="text-danger">{errors.fileUpload}</p>}
          </div>
        )}

        {formData.userType === 'incubatees' && (
          <div className="form-group">
            <label>Upload Proposal:</label>
            <div className="input-group">
              <div className="input-group-prepend d-flex align-items-center">
                <span className="input-group-text">
                  <FaFileUpload />
                </span>
              </div>
              <input
                type="file"
                className="form-control-file"
                name="fileUpload"
                onChange={handleInputChange}
              />
            </div>
            {errors.fileUpload && <p className="text-danger">{errors.fileUpload}</p>}
            <p style={{ color: '#fff' }}>
  Download a sample proposal <a href="/sample-proposal.pdf" target="_blank" style={{ color: '#FFD700' }}>here</a>.
            </p>

          </div>
        )}

<div className="button-group" style={{ marginTop: '20px' }}>
  <button type="submit" className="btn btn-light btn-block">Submit</button>
  <button type="button" className="btn btn-secondary btn-block" onClick={handleCancel}>Cancel</button>
</div>
 
<div className="text-center mt-3">
        <p>Already have an account? 
        <span role="link" tabIndex={0} onClick={handleSignInClick} style={{ color: 'yellow', textDecoration: 'underline', cursor: 'pointer' }}>
  Sign In
</span>

           
        </p>
      </div>





      </form>
    </div>
    </>
  );
}

export default SignupForm;
