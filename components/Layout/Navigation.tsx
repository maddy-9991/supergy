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
import PieChartIcon from '@mui/icons-material/PieChart';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import{ ContactMail, Lightbulb, Person, WorkspacePremium, Summarize, PeopleAlt, Settings, ChatBubbleOutline, Logout }  from "@mui/icons-material";
import { makeStyles } from '@mui/styles';
import theme from '../../config/theme';


const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#363740",
    height: "100%"
  },
  avatar: {
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
    listIcon: <PieChartIcon/>,
    listText: "Übersicht"
  },
  {
    listIcon: <ConfirmationNumberIcon/>,
    listText: "Elektroplanung"
  },
  {
    listIcon: <Lightbulb/>,
    listText: "Energieerzeugung"
  },
  {
    listIcon: <Person/>,
    listText: "Komponenten"
  },
  {
    listIcon: <WorkspacePremium/>,
    listText: "Optimierung"
  },
  {
    listIcon: <Summarize/>,
    listText: "Berichte"
  },
  {
    listIcon: <PeopleAlt />,
    listText: "Anbieterverzeichnis"
  },
  {
    listIcon: <Settings />,
    listText: "Einstellungen"
  },
  {
    listIcon: '',
    listText: ''
  },
  {
    listIcon: '',
    listText: ''
  },
  {
    listIcon: '',
    listText: ''
  },
  {
    listIcon: <ChatBubbleOutline/>,
    listText: 'Support'
  },
  {
    listIcon: <Logout/>,
    listText: 'Abmelden'
  }
];

export default function Navigation() {
  const classes = useStyles();
  const sideList = () => (
    <Box className={classes.menuSliderContainer}>
      <div className="flex flex-row">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
        variant="square"
      />
      </div>

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
