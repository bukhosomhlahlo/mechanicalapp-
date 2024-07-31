import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, oauthLogin } from '../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';

const Login = ({ isAuthenticated, login, oauthLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="social-login">
        <button className="btn btn-danger" onClick={() => oauthLogin('google')}>Login with Google</button>
        <button className="btn btn-primary" onClick={() => oauthLogin('facebook')}>Login with Facebook</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, oauthLogin })(Login);
