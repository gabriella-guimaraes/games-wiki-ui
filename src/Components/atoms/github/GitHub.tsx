import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from "./GitHub.module.css";

function GitHub() {
  return (
    <Button variant="outlined" startIcon={<GitHubIcon />} className={styles.btn}>
        <a href="https://github.com/gabriella-guimaraes/games-wiki-ui" target="blank" className={styles.link}>Source Code</a>
    </Button>
  )
}

export default GitHub;