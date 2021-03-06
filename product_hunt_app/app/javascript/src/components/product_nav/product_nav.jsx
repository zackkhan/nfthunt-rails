import React from 'react';
import { NavLink } from 'react-router-dom';

class ProductNav extends React.Component {

  render() {
    return (
      <div className="product-nav">
        <p className="product-nav-header">FEEDS</p>
        <ul className="product-nav-list">
          <li>
            <NavLink exact to="/" 
                     className="product-nav-item"
                     activeClassName="product-nav-selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics/tech" 
                     className="product-nav-item"
                     activeClassName="product-nav-selected">
              PFPs
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics/games"
                     className="product-nav-item"
                     activeClassName="product-nav-selected" >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics/books" 
                     className="product-nav-item"
                     activeClassName="product-nav-selected">
              Audio NFTs
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics/artificial_intelligence"
                     className="product-nav-item"
                     activeClassName="product-nav-selected" >
              Video NFTs
            </NavLink>
          </li>
          <li>
            <NavLink to="/topics/developer_tools" 
                     className="product-nav-item"
                     activeClassName="product-nav-selected">
              Defi NFTs
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/topics" 
                     className="product-nav-item"
                     activeClassName="product-nav-selected">
              All Topics
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductNav;