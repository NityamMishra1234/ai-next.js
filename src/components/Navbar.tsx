// src/components/Navbar.tsx
'use client';
import React, { useState } from "react";
import {
  AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, Typography
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListItemButton } from "@mui/material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/documentation" },
    { name: "About", path: "/about" },
    { name: "Be the Part", path: "/join" },
  ];

  return (
    <>
      <AppBar position="static" className="bg-[#1E293B] shadow-lg h-16 flex justify-center">
        <Toolbar className="flex justify-between items-center px-6 w-full">
          <Typography variant="h6" className="font-bold text-gray-200">AI Assistant</Typography>

          <div className="hidden md:flex space-x-8">
            {navItems.map(({ name, path }) => (
              <Link key={name} href={path} passHref>
                <Typography className={`cursor-pointer text-lg hover:underline text-gray-300 ${pathname === path ? "text-blue-400" : ""}`}>
                  {name}
                </Typography>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/login">
              <Button variant="contained" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 text-lg">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="contained" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 text-lg">Sign Up</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <div className="w-72 bg-gray-900 h-full text-white flex flex-col p-4">
          <div className="flex justify-end">
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon className="text-white" fontSize="large" />
            </IconButton>
          </div>

          <List className="space-y-4 mt-4">
          {navItems.map(({ name, path }) => (
  <ListItem key={name} disablePadding onClick={handleDrawerToggle}>
    <ListItemButton>
      <Link href={path} className="text-center text-lg font-medium w-full">
        {name}
      </Link>
    </ListItemButton>
  </ListItem>
))}
          </List>

          <div className="mt-6 flex flex-col space-y-4 px-6">
            <Link href="/login">
              <Button variant="outlined" className="border-gray-500 text-gray-300 hover:border-white hover:text-white py-3 text-lg w-full">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="contained" className="bg-blue-600 hover:bg-blue-500 py-3 text-lg w-full">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
