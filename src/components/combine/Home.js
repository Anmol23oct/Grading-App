import React from 'react'
import jupyter from '../../assets/jupyter-logo.png'
import jupytercodepost from '../../assets/jupyter-codepost-combine.png'
import you from '../../assets/youcom.png'
import codepost from '../../assets/codepost-logo.jpeg'
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
        {/*<HomePageCards
            title="Note"
            imgpath={jupyter}
            alttext="anmol"
            buttons={
              <>
                <a href="https://services.cs.rutgers.edu/accounts/activate/activate" class="btn" target='_blank'>Click Here </a>
                <a href="https://services.cs.rutgers.edu/accounts" class="btn" target='_blank'>Forgot Password </a>
              </>
            }
          >
            If you haven't used Computer Science Department facilities before, please click link below. You will be asked to login with your University netid and password.  Choose the "ilab" cluster. You'll then be asked to choose a password. It will work with this system and anything else in the computer science department. Setting this password will not have any effect on your University password. It's a separate password for computer science.
            If you forget this password, you can go to Forgot Password link to reset yout computer science password.

          </HomePageCards>*/}


          <HomePageCards
            title="Code"
            imgpath={jupyter}
            alttext="jupyter"
            buttons={
              <>
                <a href="/code" class="btn">Click Here </a>
              </>
            }
          >
            {/* <h3>Fetch, Code and Submit (integrated hub + you.com).</h3> */}
            

            Fetch your assignment from nbgrader, complete code with customized you.com search. Submit through nbgrader. For access issues, contact TA and/or use help form.
          </HomePageCards>

          <HomePageCards title="Search" 
          imgpath={you}
          alttext="you"
          buttons={
            <>
              <a href="/search" class="btn" >
                Click Here
              </a>
            </>
          }
          >
            {/* <h3>Check submissions and Grades (intgerated hub + codepost).</h3> */}
            
            Integrated AI search engine you.com and generative AI engine youchat can assist you complete assignments faster and better. Just make sure answers provided by AI engines are correct.
          </HomePageCards>

          <HomePageCards title="Grades"
           imgpath={codepost}
           alttext="Grades"
           buttons={
            <>
              <a href="/grades" class="btn" >
                Click Here
              </a>
            </>
          }
          >
              Find all grades and code feedback under codepost. Students can paralelly compare code on jupyterlab with their feedback provided in codepost. Email the Grader/TA for feedback queries.

          </HomePageCards>

          {/* <HomePageCards title="Step 4"
          imgpath={codepost}
          alttext="anmol"
          buttons={
            <>
              <a href="/Help" class="btn" >
                Help
              </a>
            </>
          }
          >
           Submit questions on codebench platform. Click here to get help. For urgent inquiries, please contact the staff directly.


          </HomePageCards> */}
          <Divider style={{ width: "100%", marginTop: 25, marginBottom: 10 }} />
        </Grid >
        <Grid item xs={1} />
      </Grid >
    </div >
  )
}

export default Home

