import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center text-center bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60%] h-[50vh] bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-50 blur-3xl rounded-full"></div>
      </div>

      <Container className="relative z-10 flex flex-col items-center">
        <Typography variant="h3" className="font-extrabold text-white drop-shadow-lg">
          Welcome to Your AI Assistant
        </Typography>
        <Typography variant="h6" className="text-gray-400 mt-4 max-w-xl">
          Experience seamless automation and AI-powered assistance to simplify your digital life.
        </Typography>

        <div className="mt-6 flex space-x-6">
          <Link href="/documentation">
            <Button variant="contained" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 text-lg rounded-lg">
              Documentation
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="contained" className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 px-6 py-3 text-lg rounded-lg">
              Login
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
