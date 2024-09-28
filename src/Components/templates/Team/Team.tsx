import React from 'react';
import styles from "./Team.module.css";
import Grid from '@mui/material/Grid2';
import MainTitle from '../../atoms/mainTitle/mainTitle';
import { Typography } from '@mui/material';
import Carrousel from '../../organisms/Carrousel/Carrousel';
import AttributionIcon from '@mui/icons-material/Attribution';
import GroupsIcon from '@mui/icons-material/Groups';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CodeIcon from '@mui/icons-material/Code';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import padme from "../../../assets/padme.png";
import obiwan from "../../../assets/obiwan.png";
import han from "../../../assets/han-solo.png";
import anakin from "../../../assets/anakin.png";
import vader from "../../../assets/vader.png";
import cody from "../../../assets/cody.png";
import r2d2 from "../../../assets/r2d2.png";



const cardInfo = [
    {
        id: 1,
        name: "Me",
        description: "Project Owner",
        image: padme,
        icon: <AttributionIcon fontSize='large' />
    },
    {
        id: 2,
        name: "Me",
        description: "Project Manager",
        image: obiwan,
        icon: <GroupsIcon fontSize='large' />
    },
    {
        id: 3,
        name: "Me too",
        description: "Scrum Master",
        image: han,
        icon: <ContentPasteIcon fontSize='large' />
    },
    {
        id: 4,
        name: "Yeah, that's me",
        description: "FrontEnd Developer",
        image: anakin,
        icon: <CodeIcon fontSize='large' />
    },
    {
        id: 5,
        name: "Also me",
        description: "BackEnd Developer",
        image: vader,
        icon: <CodeIcon fontSize='large' />
    },
    {
        id: 6,
        name: "Guess who?",
        description: "QA Engineer",
        image: cody,
        icon: <HowToRegIcon fontSize='large' />
    },
    {
        id: 7,
        name: "...Me!",
        description: "UI & UX Designer",
        image: r2d2,
        icon: <DesignServicesIcon fontSize='large' />
    }
]

function Team() {
  return (
    <section className={styles.Team}>
        <Grid container alignItems="center" alignContent="center" spacing={3}>
            <Grid size={12}>
                <MainTitle text="Meet our Team!" smaller={true} />
            </Grid>
            <Grid size={12}>
                <Typography variant='body1' gutterBottom>Behind Games Wiki is a team passionate about technology and, of course, video games! We are developers and gamers dedicated to creating a platform that allows all players to document their journeys through the world of gaming. By combining our experience in web development with our love for the gaming universe, we are committed to delivering an engaging and user-friendly experience. This project is, above all, a reflection of our desire to learn, grow, and share with the gaming community.</Typography>
            </Grid>
            <Grid size={12}>
                <Carrousel cards={cardInfo} />
            </Grid>
        </Grid>
    </section>
  )
}

export default Team;