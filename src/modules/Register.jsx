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

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/auth/register", { name, email, password });
      navigate("/login");
    } catch (error) {
      alert("Error registering");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={5} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          Register
        </Typography>

        <Box component="form" onSubmit={handleRegister}>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            type="submit"
          >
            Register
          </Button>

        </Box>
      </Paper>
    </Container>
  );
}