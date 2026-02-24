import { Container, Box, Typography, List, ListItem } from "@mui/material";

export default function Skills() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Box className="card" sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>Skills</Typography>

        <List>
          <ListItem>⚡ React + Vite</ListItem>
          <ListItem>⚡ JavaScript</ListItem>
          <ListItem>⚡ HTML & CSS</ListItem>
          <ListItem>⚡ Node.js & Express</ListItem>
          <ListItem>⚡ Python</ListItem>
          <ListItem>⚡ MySQL</ListItem>
          <ListItem>⚡ MongoDB</ListItem>
          <ListItem>⚡ C Programming Language</ListItem>
          <ListItem>⚡ UI/UX</ListItem>
          <ListItem>⚡ Git & GitHub</ListItem>
          <ListItem>⚡ Problem Solving</ListItem>
        </List>
      </Box>
    </Container>
  );
};
