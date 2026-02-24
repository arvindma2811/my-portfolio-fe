import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'transparent', border: 'none' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="div"
          sx={{
            fontSize: '3em',
            fontWeight: 800,
            letterSpacing: '5px',
            textTransform: 'uppercase',
            textAlign: 'center',
            mb: 2
          }}
        >
          Portfolio
        </Typography>

        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
          <Box sx={{ display: 'flex', gap: 2.5, justifyContent: 'center' }}>

            <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
            <Button color="inherit" onClick={() => navigate("/info")}>Info</Button>
            <Button color="inherit" onClick={() => navigate("/skills")}>Skills</Button>
            <Button color="inherit" onClick={() => navigate("/projects")}>Projects</Button>

            {/* Show only if logged in */}
            {token && (
              <Button color="inherit" onClick={() => navigate("/users")}>
                Users
              </Button>
            )}

            {/* Show only if NOT logged in */}
            {!token && (
              <>
                <Button color="inherit" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button color="inherit" onClick={() => navigate("/register")}>
                  Register
                </Button>
              </>
            )}

            {/* Logout when logged in */}
            {token && (
              <Button color="error" onClick={handleLogout}>
                Logout
              </Button>
            )}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}