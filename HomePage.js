import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class Home extends Component {
  render() {
    return (
      <div>
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#2874f0', color: 'white' }}>
          <h1>Flipkart</h1>
          <nav>
            <Link to="/home" id="home" className="home" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
            <Link to="/login" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Login</Link>
            <Link to="/cart" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Cart</Link>
            <Link to="/become-seller" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Become a Seller</Link>
          </nav>
        </header>
         {/* Search bar */}
                <div style={{ padding: '10px', backgroundColor: '#2874f0', display: 'flex', justifyContent: 'center' }}>
                  <input type="text" placeholder="Search for Products, Brands and More" style={{ width: '50%', padding: '8px' }} />
                </div>
        
                {/* Categories */}
              
        
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', padding: '10px' }}>
          {['Grocery', 'Mobiles', 'Fashion', 'Electronics', 'Home & Furniture', 'Appliances', 'Flight Bookings', 'Beauty, Toys & More', 'Two Wheelers'].map((category, index) => (
            <div key={index} style={{ margin: '0 15px', cursor: 'pointer' }}>
              {category === 'Grocery' ? (
                <Link to="/grocery" style={{ textDecoration: 'none', color: 'black' }}>
                  {category}
                </Link>
              ) : (
                <span>{category}</span>
              )}
            </div>
          ))}
        </div>
        
               
        
               
           
      
      </div>
    )
  }
}

export default Home