"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { loginSuccess } from "@/lib/features/authSlice";
import Navbar from "@/components/Navbar";


const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      router.push("/ai"); // Protected route
    }
  }, [token, router]);

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(loginSuccess({ token: data.token, user: data.user }));
        localStorage.setItem("token", data.token);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
    <Navbar/>
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
          Login
        </Typography>

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
          onClick={handleLogin}
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
          Login
        </Button>

        <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-300 underline">
            Sign up here
          </Link>
        </Typography>
      </Paper>
    </Box>
    </>
  );
};

export default LoginPage;
