import {Card, CardContent, Typography, Container, Grid, Chip, Box} from "@mui/material";

const Projects = () => {
    const projects = [
        {
            title: "JobQuest - Behavioural Interview Preparation",
            description: "A website to help users prepare for behavioural interviews by providing mock interviews, tests, videos and analysis.",
            tools: ["HTML & CSS", "Node.js", "PostgreSQL", "Express"],
            link: "https://jobquest-ysod.onrender.com/"
        },
        {
            title: "E-Commerce App",
            description: "An app to help users shop online with a variety of products and services with secure payment integration.",
            tools: ["Python", "Tkinter", "MySQL"]
        }
    ];

    return (
        <Container sx={{textAlign:"center",marginTop: "2rem"}}>
            <Typography variant="h4" sx={{mb: 4, fontWeight: 700}}>My Projects</Typography>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid item size={{xs:12,md:6}} key={index}>
                        <Card sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.08)", 
                            color: "white", 
                            borderRadius: "15px",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            transition: "all 0.3s ease",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                transform: "translateY(-8px)"
                            }
                        }}>
                            <CardContent sx={{flexGrow: 1, display: "flex", flexDirection: "column"}}>
                                <Typography variant="h6" component="div" sx={{fontWeight: 700, mb: 2}}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" sx={{marginBottom: "2rem", flexGrow: 1, color: "rgba(255, 255, 255, 0.8)"}}>
                                    {project.description}
                                </Typography>
                                <Box sx={{mb: 2}}>
                                    <Typography variant="caption" sx={{display: "block", mb: 1, color: "rgba(255, 255, 255, 0.6)", fontWeight: 500}}>
                                        Tools & Technologies:
                                    </Typography>
                                    <Box sx={{display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center"}}>
                                        {project.tools.map((tool, idx) => (
                                            <Chip 
                                                key={idx}
                                                label={tool} 
                                                size="small"
                                                sx={{
                                                    backgroundColor: "rgba(12, 111, 209, 0.6)",
                                                    color: "white",
                                                    fontWeight: 600,
                                                    fontSize: "0.75rem"
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                                {project.link && (
                                    <Typography 
                                        variant="body2" 
                                        component="a" 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        sx={{
                                            display: "inline-block",
                                            marginTop: "1rem", 
                                            color: "#0c9dff",
                                            fontWeight: 600,
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                            "&:hover": {
                                                color: "#00d4ff"
                                            }
                                        }}
                                    >
                                        Visit Project →
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid> 
        </Container> 
    ); 
};

export default Projects;