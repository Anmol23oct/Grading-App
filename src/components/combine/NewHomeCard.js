import { makeStyles } from "@material-ui/core/styles";
import React from 'react'
import Button from '@mui/material/Button';
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Box,
} from "@material-ui/core";



// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: 300,
//         display: 'flex',
//         marginRight: 15,
//         boxShadow: '12px -12px teal',
//         marginLeft: 15,
//         marginBottom: 30,
//         backgroundColor: "#3c474a",
//         color: "#feffff",

//     },
// }));


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

const NewHomeCard = (props) => {
    return (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      );
    // const { title, children, buttons } = props;
    // const classes = useStyles();

    // return (
    //     <Card raised className={classes.root} variant="outlined" >
    //         <CardContent >
    //             <Typography color="white" variant="h5" >
    //                 <Box fontWeight="fontWeightBold" color="white">{title}</Box>
    //             </Typography>
    //             <Typography  >{children}</Typography>
                
    //                 <CardActions >
    //                     {buttons}
    //                 </CardActions>
    //         </CardContent>
    //     </Card >
    // );
}

export default NewHomeCard