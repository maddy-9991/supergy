import React from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import{ Apps, ContactMail, AssignmentInd, Home }  from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import theme from '../../config/theme';


const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#363740",
    height: "100%"
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "#A4A6B3",
    '&:hover': {
      color: '#2FD5C1'
    },
  }
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Übersicht"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Elektroplanung"
  },
  {
    listIcon: <Apps />,
    listText: "Energieerzeugung"
  },
  {
    listIcon: <ContactMail />,
    listText: "Komponenten"
  },
  {
    listIcon: <ContactMail />,
    listText: "Optimierung"
  },
  {
    listIcon: <ContactMail />,
    listText: "Berichte"
  },
  {
    listIcon: <ContactMail />,
    listText: "Anbieterverzeichnis"
  },
  {
    listIcon: <ContactMail />,
    listText: "Einstellungen"
  }
];

export default function Navigation() {
  const classes = useStyles();
  const sideList = () => (
    <Box className={classes.menuSliderContainer}>
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">{sideList()}</Box>
    </>
  );
}
