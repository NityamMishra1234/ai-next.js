"use client";

import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const SignupPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful!");
        router.push("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0d1117",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          borderRadius: 4,
          width: "100%",
          maxWidth: 450,
          background: "linear-gradient(to right, #1e3c72, #2a5298)",
          color: "#fff",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          InputLabelProps={{ style: { color: "#e3f2fd" } }}
          InputProps={{ style: { color: "#fff" } }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          InputLabelProps={{ style: { color: "#e3f2fd" } }}
          InputProps={{ style: { color: "#fff" } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          InputLabelProps={{ style: { color: "#e3f2fd" } }}
          InputProps={{ style: { color: "#fff" } }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSignup}
          sx={{
            mt: 3,
            py: 1.5,
            background: "#2196f3",
            fontWeight: "bold",
            "&:hover": {
              background: "#1976d2",
            },
          }}
        >
          Sign Up
        </Button>

        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-300 underline">
            Login here
          </Link>
        </Typography>
      </Paper>
    </Box>
    </>
  );
};

export default SignupPage;
