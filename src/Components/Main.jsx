import {Button, Card, CardActions, CardContent, CardMedia, Container, Paper, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backGroundSize: "cover",
        backGroundRepeat: "no-repit",
        backGroundPosition: "center"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(8),
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
    cardMedia: {
        paddingTop: "56.25%",
    }
}))

const cards = [1,2,3,4,5,6,7,8,9];

export default function Main() {

    const classes = useStyles();

    return (
        <main>
            <Paper className={classes.mainFeaturesPost}
                   style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
                <Container fixed>
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>

                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom
                                >
                                    Разгрузите свой ум
                                </Typography>
                                <Typography
                                    component="h5"
                                    color="inherit"
                                    paragraph
                                >
                                    Обретите ясность и спокойствие – переместите свои задачи из головы в список дел (неважно, где вы и какое устройство используете).
                                </Typography>
                                <Button variant="contained" color="secondary">
                                    Learn More
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <div className={classes.mainContent}>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Обретите безмятежность с To-do list</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>To-do list дает уверенность в том, что все организовано и принято во внимание, чтобы вы могли преуспеть в важных для себя делах.</Typography>
                    <div className={classes.mainButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">Start Now</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">Learn More</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}