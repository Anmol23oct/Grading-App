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
            title="Note"
            buttons={
              <>
                <a href="https://services.cs.rutgers.edu/accounts/activate/activate" class="btn" target='_blank'>Click Here </a>
                <a href="https://services.cs.rutgers.edu/accounts" class="btn" target='_blank'>Forgot Password </a>
              </>
            }
          >
            If you haven't used Computer Science Department facilities before, please click link below. You will be asked to login with your University netid and password.  Choose the "ilab" cluster. You'll then be asked to choose a password. It will work with this system and anything else in the computer science department. Setting this password will not have any effect on your University password. It's a separate password for computer science.
            If you forget this password, you can go to Forgot Password link to reset yout computer science password.

          </HomePageCards>


          <HomePageCards
            title="Step 1"
            buttons={
              <>
                <a href="/Fetch_Code_Submit" class="btn">Fetch,Code,Submit </a>
              </>
            }
          >
            <h3>Fetch, Code and Submit (integrated hub + you.com).</h3>
            

            Fetch your assignment from nbgrader, code with customized you.com search, and submit through nbgrader. If you are not able to submit through codebench, email the lab to TA.
          </HomePageCards>

          <HomePageCards title="Step 2" buttons={
            <>
              <a href="/Grading_Feedback" class="btn" >
                Grading Feedback
              </a>
            </>
          }
          >
            <h3>Check submissions and Grades (intgerated hub + codepost).</h3>
            
            Check codepost folder in the hub for submitted version, check grade and feedback through codepost

          </HomePageCards>

          <HomePageCards title="Step 3" buttons={
            <>
              <a href="/Admin" class="btn" >
                Admin
              </a>
            </>
          }
          >
            Admin grading access only


          </HomePageCards>

          <HomePageCards title="Step 4" buttons={
            <>
              <a href="/Help" class="btn" >
                Help
              </a>
            </>
          }
          >
           Submit questions on codebench platform. Click here to get help. For urgent inquiries, please contact the staff directly.


          </HomePageCards>
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid >
        <Grid item xs={1} />
      </Grid >
    </div >
  )
}

export default Home

