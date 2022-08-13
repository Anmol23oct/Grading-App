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
        maxWidth: 300,
        minWidth: 300,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 30,
    },
}));

const HomePageCards = (props) => {
    const { title, children, buttons } = props;
    const classes = useStyles();

    return (
        <Card raised className={classes.root}>
            <CardContent>
                <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">{title}</Box>
                </Typography>
                <Typography variant="body1">{children}</Typography>
                <CardActions style={{ justifyContent: "space-around" }}>
                    {buttons}
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default HomePageCards;