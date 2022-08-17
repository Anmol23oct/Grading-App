import React from 'react'
import {
  Grid,
  Typography,
  Divider,
  Link,
  Button,
  Box,
} from "@material-ui/core";
import './Home.css'
import HomePageCards from "./HomePageCards";


const Home = () => {
  return (
    <div id="Home">
      <br></br>
      <Typography style={{ marginBottom: 20, textAlign: "center" }} variant="h2" className='title'>
        <Box fontWeight="fontWeightBold">Welcome to CodeBench</Box>
      </Typography>
      <br></br>
      <br></br>
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={20}>
          <HomePageCards
            title="Step 1"
            buttons={
              <>
                <a href="/Fetch_Submit" class="btn">fetch </a>
              </>
            }
          >
            Download the assignment here.
          </HomePageCards>

          <HomePageCards title="Step 2" buttons={
            <>
              <a href="/Assignment_Completion" class="btn" >
                Complete Assignment
              </a>
            </>
          }
          >
            To complete the assignment, click on the button below. You will be able
            to edit, run, and test your assignment.
          </HomePageCards>

          <HomePageCards title="Step 3" buttons={
            <>
              <a href="/Fetch_Submit" class="btn" >
                Submit
              </a>
            </>
          }
          >
            Once you have finished your assignment, submit it here.


          </HomePageCards>

          <HomePageCards title="Step 4" buttons={
            <>
              <a href="/Grading_Feedback" class="btn" >
                Grading/Feedback
              </a>
            </>
          }
          >
            You can view your graded assignment as well as any feedback you received
            here.


          </HomePageCards>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid >
        <Grid item xs={1} />
      </Grid >
    </div >
  )
}

export default Home

