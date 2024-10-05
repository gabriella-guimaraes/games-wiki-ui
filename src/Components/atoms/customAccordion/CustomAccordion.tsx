import React from 'react';
import styles from "./CustomAccordion.module.css";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CustomAccordionProps {
    title: string;
    content: string[];
}
function CustomAccordion({ title, content }: CustomAccordionProps) {
  return (
    <section className={styles.CustomAccordion}>
        <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className={styles.icon} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {title}
                </AccordionSummary>
                <AccordionDetails>
                  {content.map((items) => (
                    <Typography variant="body2" key={items} gutterBottom>
                      {items}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
    </section>
  )
}

export default CustomAccordion;