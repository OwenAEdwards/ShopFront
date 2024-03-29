// Navbar.js
import React from 'react';
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent,  
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>My E-commerce Site</NavbarBrand>
        <NavbarMenuToggle />
        <NavbarMenu>
          <NavbarMenuItem>Home</NavbarMenuItem>
          <NavbarMenuItem>Products</NavbarMenuItem>
          <NavbarMenuItem>Cart</NavbarMenuItem>
          <NavbarMenuItem>Account</NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
    
  );
};

export default Nav;
