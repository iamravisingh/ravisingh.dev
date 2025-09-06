import { Link } from "react-router-dom";
import { useThemeContext } from "../../context";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Resume from "/ravi_singh_resume.pdf";
// import Avatar from "../../../public/avatar.svg"
import "./style.css";

export const Header = () => {
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <header>
      <section>
        <div className="name">
          {/* <Avatar/> */}
          <Link to="/">
            <span>ravi.dev</span>
          </Link>
        </div>
        <div className="header-menu">
          <Link target="_blank" to={Resume}>
            Resume
          </Link>
          <Link to="/blogs">Blogs</Link>
          <IconButton
            onClick={toggleTheme}
            sx={{
              ml: 2,
              "&:focus": { outline: "none" },
            }}
          >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>
      </section>
    </header>
  );
};
