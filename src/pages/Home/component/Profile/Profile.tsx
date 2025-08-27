import { Container, Typography, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import "./style.css";

export const Profile = () => {
  return (
    <Container maxWidth={false} sx={{ px: 4, py: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="legend" gutterBottom>
          I am a passionate Software Engineer
        </Typography>
      </Box>

      <Paper
        variant="elevation"
        sx={{
          p: 4,
          mx: "auto",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="body1" paragraph>
          I am a passionate Software Engineer with 10 years of experience, and
          for the past 3 years I have been working deeply in the GIS domain at
          HERE Maps.
        </Typography>

        <Typography variant="body1" paragraph>
          I have strong expertise in{" "}
          <b>JavaScript, TypeScript, and Node.js</b>, with a solid
          background in frontend and backend development. Over the years, I’ve
          contributed to a wide range of projects across domains like SaaS,
          PaaS, E-Commerce, Service, and Product platforms.
        </Typography>

        <Typography variant="body1" paragraph>
          My current focus is on <b>geospatial technologies</b>, including LiDAR
          data processing, 3D visualization, and map rendering. I enjoy solving
          complex problems, enabling teams by unblocking challenges, and
          applying <b>AI/ML</b>
          techniques to real-world geospatial datasets.
        </Typography>

        <Typography variant="body1" paragraph>
          Outside of tech, I’m also a <b>rhythmist (dholak player)</b>, and I
          love keeping active through <b>exercise, cricket, and volleyball</b>.
        </Typography>

        <Typography variant="subtitle2" align="center" mt={4}>
          *"I believe coding should feel natural — if it feels hard, you might
          be doing it wrong."*
        </Typography>
      </Paper>
    </Container>
  );
};
