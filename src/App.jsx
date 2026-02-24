import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./modules/Navbar";
import Info from "./modules/Info";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Login from "./modules/Login";
import Register from "./modules/Register";
import Users from "./modules/Users";
import ProtectedRoute from "./ProtectedRoute";

import profile from "./assets/profile.jpg";
import "./App.css";

/* ---------- Home Component ---------- */
function Home() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [hover, setHover] = useState(false);

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Box
        component="img"
        src={profile}
        alt="profile"
        sx={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: hover
            ? "0 0 30px #0c6fd1"
            : "0 0 25px rgba(0,255,255,0.15)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          transform: hover ? "scale(1.05)" : "none",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />

      <h1>Hi, I'm Arvind M A</h1>
      <p>Full Stack Developer Aspirant</p>
      <p>1st Year CSE Student at KCT</p>
    </Container>
  );
}

/* ---------- Main App ---------- */
export default function App() {
  return (
    <div className="site-wrapper">
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🔐 Protected Users Route */}
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}