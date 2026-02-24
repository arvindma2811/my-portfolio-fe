import { useState } from "react";
import API from "../api";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
  Tabs,
  Tab
} from "@mui/material";

export default function AuthDialog({ open, onClose }) {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    await API.post("/auth/register", form);
    setTab(0);
  };

  const handleLogin = async () => {
    const res = await API.post("/auth/login", {
      email: form.email,
      password: form.password
    });

    localStorage.setItem("token", res.data.token);
    onClose();
  };

  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: 600 }}>
        Welcome
      </DialogTitle>

      <DialogContent>

        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>

        <Box sx={{ mt: 3 }}>

          {tab === 1 && (
            <TextField
              fullWidth
              label="Username"
              name="name"
              margin="normal"
              onChange={handleChange}
            />
          )}

          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            margin="normal"
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            onClick={tab === 0 ? handleLogin : handleRegister}
          >
            {tab === 0 ? "Login" : "Register"}
          </Button>

        </Box>

      </DialogContent>
    </Dialog>
  );
}