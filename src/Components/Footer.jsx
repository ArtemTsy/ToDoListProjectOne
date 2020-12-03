import React from "react";
import {Typography} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
}))

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <footer>
            <Typography variant="h6" align="center" gutterBottom>
                Присоединяйтесь к миллионам людей, которые организуют жизнь и работу с помощью To-do list.
            </Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}
            >
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon />}
                />
            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                To-do List React js Material Ui SIte
            </Typography>
        </footer>
    )
}