import { Container, Box, Typography, Paper, Avatar, Grid, Chip } from "@mui/material";

export default function Info() {
  const skills = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Python"];

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "15px" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Profile Picture */}
          <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar
              src="https://avatars.githubusercontent.com/u/12345678?v=4"
              sx={{ width: 180, height: 180, mb: 2, border: "3px solid rgba(12, 111, 209, 0.5)" }}
            />
          </Grid>

          {/* Right Column - Info */}
          <Grid item xs={12} md={8}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Arvind M A
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 3 }}>
              CSE Student | Full Stack Developer Learner
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, minWidth: "80px" }}>Email:</Typography>
                <Typography variant="body2">arvindma281107@gmail.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, minWidth: "80px" }}>Phone:</Typography>
                <Typography variant="body2">+91 1234567890</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, minWidth: "80px" }}>Location:</Typography>
                <Typography variant="body2">Coimbatore, Tamil Nadu</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, minWidth: "80px" }}>LinkedIn:</Typography>
                <Typography 
                  variant="body2"
                  component="a" 
                  href="https://www.linkedin.com/in/arvind-m-a-aa7808384" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ color: "#0c9dff", textDecoration: "none", "&:hover": { color: "#00d4ff" } }}
                >
                  Connect on LinkedIn
                </Typography>
              </Box>
            </Box>

            {/* Skills */}
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: "rgba(255, 255, 255, 0.8)" }}>
                Learning & Skills
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(12, 111, 209, 0.6)",
                      color: "white",
                      fontWeight: 600
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
