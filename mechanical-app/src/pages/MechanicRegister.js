import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerMechanic } from '../redux/actions/mechanicActions';

const MechanicRegister = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    services: '',
    location: '',
    distance: '',
    towingCompanies: '',
    partsAvailable: '',
  });

  const { businessName, services, location, distance, towingCompanies, partsAvailable } = formData;
  const dispatch = useDispatch();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    dispatch(registerMechanic({ businessName, services: services.split(','), location, distance, towingCompanies: towingCompanies.split(','), partsAvailable: partsAvailable.split(',') }));
  };

  return (
    <div>
      <h1>Register Mechanic</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Business Name"
            name="businessName"
            value={businessName}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Services (comma separated)"
            name="services"
            value={services}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Distance"
            name="distance"
            value={distance}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Towing Companies (comma separated)"
            name="towingCompanies"
            value={towingCompanies}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Parts Available (comma separated)"
            name="partsAvailable"
            value={partsAvailable}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default MechanicRegister;
