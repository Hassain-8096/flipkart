import React, { Component } from 'react';
import HomePage from './HomePage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrMobile: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Email/Mobile: ${this.state.emailOrMobile}\nPassword: ${this.state.password}`);
  };

  render() {
    const { emailOrMobile, password } = this.state;

    return (

       <div> <HomePage/>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2874f0',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          backgroundColor: '#fff',
          width: '350px',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ marginBottom: '20px', color: '#2874f0' }}>Login to Flipkart</h2>
          <form onSubmit={this.handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
              <label htmlFor="emailOrMobile" style={{ marginBottom: '5px', fontWeight: '600' }}>Mobile number or Email</label>
              <input
                type="text"
                id="emailOrMobile"
                name="emailOrMobile"
                placeholder="Enter mobile number or email"
                value={emailOrMobile}
                onChange={this.handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
              <label htmlFor="password" style={{ marginBottom: '5px', fontWeight: '600' }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
                required
                style={{
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#fb641b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
            <a
              href="/login"
              style={{
                display: 'block',
                marginTop: '10px',
                fontSize: '14px',
                textAlign: 'right',
                color: '#2874f0',
                textDecoration: 'none'
              }}
            >
              Forgot Password?
            </a>
          </form>
          <div style={{ marginTop: '20px', fontSize: '14px', textAlign: 'center' }}>
            <span>Don't have an account? </span>
            <a href="/signup" style={{ color: '#2874f0', fontWeight: '600', textDecoration: 'none' }}>Sign Up</a>
          </div>
        </div>
        
      </div>
      </div>
    );
  }
}

export default Login;