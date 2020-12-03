import {Container, Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LogIn from "./Appbar/LogIn";
import SignUp from "./Appbar/SignUp";
import OpenMenu from "./Appbar/OpenMenu";
import HomeIcon from "./Appbar/HomeIcon";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
}))

export default function Appbar() {

    const classes = useStyles();

    return (

        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <OpenMenu />
                    <HomeIcon />
                    <Typography variant="h4" className={classes.title} align="center">To-do list</Typography>
                    <LogIn/>
                    <SignUp/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}