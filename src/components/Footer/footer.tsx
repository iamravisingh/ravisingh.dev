import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { SOCIAL_URL } from "./constant";
import "./style.css";

export const Footer = () => {
  return (
    <footer>
    <Grid>
      <IconButton
        component="a"
        href={SOCIAL_URL.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        aria-label="Ravi Singh's GitHub"
      >
        <GitHubIcon fontSize="medium" />
      </IconButton>

      <IconButton
        component="a"
        href={SOCIAL_URL.TWITTER}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        aria-label="Ravi Singh's Twitter"
      >
        <TwitterIcon fontSize="medium" />
      </IconButton>

      <IconButton
        component="a"
        href={SOCIAL_URL.LINKED_IN}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        aria-label="Ravi Singh's LinkedIn"
      >
        <LinkedInIcon fontSize="medium" />
      </IconButton>
    </Grid>
    </footer>
  );
};
