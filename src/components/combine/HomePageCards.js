import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        display: 'flex',
        marginRight: 15,
        boxShadow: '12px -12px teal',
        marginLeft: 15,
        marginBottom: 30,
        backgroundColor: "#3c474a",
        color: "#feffff",

    },
}));

const HomePageCards = (props) => {
    const { title, children, buttons } = props;
    const classes = useStyles();

    return (
        <Card raised className={classes.root} >
            <CardContent >
                <Typography color="white" variant="h5" >
                    <Box fontWeight="fontWeightBold" color="white">{title}</Box>
                </Typography>
                <Typography variant="body1" >{children}</Typography>
                <CardActions >
                    {buttons}
                </CardActions>
            </CardContent>
        </Card >
    );
};

export default HomePageCards;