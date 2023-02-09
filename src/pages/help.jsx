import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import {Box,Tab} from '@mui/material'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@mui/material/Tabs';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ContactForm from '../components/Contact-Us/ContactForm2'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '../components/combine/accordion'
import TitleText from '../utils/TitleText'
import { getAnalytics, logEvent } from "firebase/analytics";
import {TabContext, TabList, TabPanel} from '@mui/lab'

function TabContainer(props) {
    TitleText('CodeBench - Help')
  useEffect(() =>{
    const analytics = getAnalytics();
    logEvent(analytics, 'Page: Help')
    console.log("Page: Help")
});
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });
  
  class ScrollableTabsButtonAuto extends React.Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="FAQ" />
              <Tab label="Contact Us" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Accordion/></TabContainer>}
          {value === 1 && <TabContainer><ContactForm/></TabContainer>}
        
        </div>
      );
    }
  }
  
  ScrollableTabsButtonAuto.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ScrollableTabsButtonAuto);
//  
//  function Help(){
//     // const [value, setValue]=useState('1')
//     handleChange = (event, value) => {
//         this.setState({ value });
//       };
//     const { value } = this.state;
//     return(
//         <div className='abc'>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={value}
//             onChange={this.handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="scrollable"
//             scrollButtons="auto"
//           >
//             <Tab label="Item One" />
//             <Tab label="Item Two" />
//             <Tab label="Item Three" />
//             <Tab label="Item Four" />
//             <Tab label="Item Five" />
//             <Tab label="Item Six" />
//             <Tab label="Item Seven" />
//           </Tabs>
//         </AppBar>

//         {value === 0 && <TabContainer>Item One</TabContainer>}
//         {value === 1 && <TabContainer>Item Two</TabContainer>}
//         {value === 2 && <TabContainer>Item Three</TabContainer>}
//         {value === 3 && <TabContainer>Item Four</TabContainer>}
//         {value === 4 && <TabContainer>Item Five</TabContainer>}
//         {value === 5 && <TabContainer>Item Six</TabContainer>}
//         {value === 6 && <TabContainer>Item Seven</TabContainer>}

//         </div>
//     //     <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//     //     <Tabs value={value} onChange={event=>setValue(value)} centered>
//     //       <Tab label="Item One" value='1'/>
//     //       <Tab label="Item Two" value='2'/>
//     //       <Tab label="Item Three" value='3'/>
//     //     </Tabs>
//     //   </Box>
//     //     <Box>
//     //         <TabContext value={value}>
//     //             <Box sx={{borderBottom:1, borderColor:'divider'}}>
//     //                 <TabList aria-label='Tabs example' onChange={event=>setValue(event.target.value)}>
//     //                     <Tab label='Tab One' value='1'/>
//     //                     <Tab label='Tab Two' value='2'/>
//     //                     <Tab label='Tab Three' value='3'/>
//     //                 </TabList>

//     //             </Box>
//     //             <TabPanel value='1'>Panel One</TabPanel>
//     //             <TabPanel value='2'>Panel Two</TabPanel>
//     //             <TabPanel value='3'>Panel Three</TabPanel>
//     //         </TabContext>
//     //     </Box>
//     // )
//     );
// }

//export default Help
