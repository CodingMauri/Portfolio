import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../Styles/Sidebar.css"

export default function Nav() {
  return (
    <Menu
    
    
    >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        About
      </a>
      <a className="menu-item" href="/pizzas">
        Projects
      </a>
      <a className="menu-item" href="/desserts">
        Resume
      </a>
    </Menu>
  );
}
