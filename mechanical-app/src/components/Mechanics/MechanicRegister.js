import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerMechanic } from '../../redux/actions/mechanicActions';

const MechanicRegister = ({ registerMechanic }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    services: '',
    location: '',
    email: '',
    phone: '',
    address: '',
    certifications: '',
    images: '',
  });

  const { businessName, services, location, email, phone, address, images } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const servicesArray = services.split(',').map(service => service.trim());
    const imagesArray = images.split(',').map(image => image.trim());
    registerMechanic({
      businessName,
      services: servicesArray,
      location,
      email,
      phone,
      address,
      images: imagesArray,
    });
  };

  return (
    <div className="container">
      <h2>Mechanic Registration</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            className="form-control"
            name="businessName"
            value={businessName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Services (comma separated)</label>
          <input
            type="text"
            className="form-control"
            name="services"
            value={services}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={location}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            name="contactDetails"
            value={phone}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="contactDetails"
            value={address}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Images (comma separated URLs)</label>
          <input
            type="text"
            className="form-control"
            name="images"
            value={images}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default connect(null, { registerMechanic })(MechanicRegister);
