import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './accordion.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    console.log(panel)
    console.log(isExpanded)
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
        id: " How to setup CS login? ",
        heading:  <p class="thick"> How to setup CS login?</p> ,
        //,
        //secondaryHeading: "this is panel 1",
        details: <p>If you haven't used Computer Science Department facilities before, please click link below. You will be asked to login with your University netid (do not use full email address. Just the netID) and password. 

        Choose the "ilab" cluster. You'll then be asked to choose a password. It will work with this system and anything else in the computer science department. Setting this password will not have any effect on your University password. It's a separate password for computer science. 
        
        If you forget this password, you can go to Forgot Password link to reset yout computer science password
        
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" href="https://services.cs.rutgers.edu/accounts/activate/activate" target={"_blank"}>
                             Click Here
                        </Button>
                        <Button variant="outlined" href="https://services.cs.rutgers.edu/accounts" target={"_blank"}>
                             Forgot Password
                        </Button>
                    </Stack></p>
    },
    {
      id: " How do I sign up for codebench? ",
      heading:  <p class="thick"> How do I sign up for codebench?</p> ,
      //,
      //secondaryHeading: "this is panel 1",
      details: <p>When you sign up for the course, you will receive an email from Rutgers CS. You will have to create an account at ilab using netID. Create a CS password as per instructions at <a href="https://netid.rutgers.edu/index.html" target="_blank"> https://netid.rutgers.edu/index.html </a>When you sign up for codebench, just use your netID </p>
    },
    {
      id: "What is codepost and How do I sign up for codepost? ",
      heading:<p class="thick">What is codepost and How do I sign up for codepost? </p>,
      details: <p> codepost is a grading management platform developed at Princeton. We are using the platform for grading and feedback. You should receive an invite from codepost to create an account using netID@rutgers.edu (do not use netID@scarlermail.. Or any other email)    </p>
    },
    {
      id: "How do I download assignments?",
      heading: <p class="thick">How do I download assignments?</p>,
      details: <p> when you sign into codebench, you should be able to see Jupyter notebook environment. Look for the “nbgrader” option in the menu. Go to nbgrader ⇒ assignment list   You should be able to see the Released Assignments. Fetch the assignment and work on it.      </p>
    },
    {
      id: "Can I submit an assignment multiple times? ",
      heading: <p class="thick">Can I submit an assignment multiple times? </p>,
      details: <p> Yes, you can submit assignments whenever you want to. However, only the last submission before the deadline will be graded. You can see due dates in the canvas schedule.   </p>   
    },
    {
        id: "After I submit an assignment can I see what I submitted? ",
        heading: <p class="thick">After I submit an assignment can I see what I submitted? </p>,
        details: <p>  Yes, look under the 439 folder (left file menu of Jupyter). You should see Labs/Assignments, both with regular and late folders. You last submission will only appear at the end of day of the submission.</p>
    },
    {
        id: " I am not able to see grading feedback for assignments? ",
        heading: <p class="thick">After I submit an assignment can I see what I submitted? </p>,
        details: <p> Grading feedback is provided via codepost. Please see codepost to see comments from the grader.</p>
    }
    

  ];

  return (
    <div className={classes.root}>
        <div>
        <p>This page allows you to see Frequently Asked Questions (FAQ) that can help resolve your issue. If you cannot find the answer to your question, please fill the Contact Us.</p>
        
        </div>
      {data.map(accordion => {
        const { id, heading, secondaryHeading, details } = accordion;
        return (
          <Accordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{heading}</Typography>
              <Typography className={classes.secondaryHeading}>
                {secondaryHeading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
