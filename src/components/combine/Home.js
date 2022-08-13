import React from 'react'
import {
  Grid,
  Typography,
  Divider,
  Link,
  Button,
  Box,
} from "@material-ui/core";

import HomePageCards from "./HomePageCards";

const Home = () => {
  return (
    <div id="Home">
      <Grid container>
        <Grid item xs={1} />
        <Grid item container justifyContent="center" xs={20}>
          <Typography style={{ marginBottom: 20, textAlign: "center" }} variant="h1">
            <Box fontWeight="fontWeightBold">Welcome to CodeBench</Box>
          </Typography>
          <HomePageCards
            title="Title"
            buttons={
              <>
                <a href="/Fetch_Submit">
                  <Button style={{ paddingLeft: '0px' }} variant="contained" color="primary" size="medium" >
                    Fetch
                  </Button>
                </a>
              </>
            }
          >
            <li>Add text here </li>
            <li>Add text here </li>
            <li>Add text here </li>
            <li>Add text here </li>

          </HomePageCards>

          <HomePageCards title="Title" buttons={
            <>
              <a href="/Assignment_Completion">
                <Button style={{ paddingLeft: '0px' }} variant="contained" color="primary" size="medium" >
                  Complete Assignment
                </Button>
              </a>
            </>
          }
          >

            Add text here add text here add text here add text here add text here
            add text here add text here add text here add text here add text here
            add text here add text here add text here add text here add text here.
          </HomePageCards>

          <HomePageCards title="Title" buttons={
            <>
              <a href="/Fetch_Submit">
                <Button style={{ paddingLeft: '0px' }} variant="contained" color="primary" size="medium" >
                  Submit
                </Button>
              </a>
            </>
          }
          >
            <li>Add text here </li>
            <li>Add text here </li>
            <li>Add text here </li>
            <li>Add text here </li>

          </HomePageCards>

          <HomePageCards title="Title" buttons={
            <>
              <a href="/Grading_Feedback">
                <Button style={{ paddingLeft: '0px' }} variant="contained" color="primary" size="medium" >
                  Grading/Feedback
                </Button>
              </a>
            </>
          }
          >
            <li>Add text here </li>
            <li>Add text here </li>
            <li>Add text here </li>
            <li>Add text here </li>

          </HomePageCards>

          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid >
        <Grid item xs={1} />
      </Grid >
    </div >
  )
}

export default Home

