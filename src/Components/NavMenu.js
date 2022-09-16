import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavMenuStyles = styled.div`
    display:flex;
    
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  
  
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%auto;
    text-align: center;
    
  }
  li {
    display: inline-flex;
    
    border-radius: 8px;
    transition: 0.3s ease background-color;
    &:hover {
      scale: 1.2;
      transition: 2;
    }
    a {
      display: inline-flex;
      
      
      padding: 1rem 1rem;
      font-size: 1.5rem;
      color: black;
      outline: none;
      text-decoration: none;
    }
    .active {
      color: white;
    }
  }
`;
export default function NavMenu() {
    
  return (
    
      <NavMenuStyles>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Resume">Resume</NavLink>
          </li>
        </ul>
      </NavMenuStyles>
    
  );
}
