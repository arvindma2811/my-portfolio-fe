import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      navigate("/users");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={5} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Login
        </Typography>

        <Box component="form" onSubmit={handleLogin}>

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            type="submit"
          >
            Login
          </Button>

        </Box>
      </Paper>
    </Container>
  );
}