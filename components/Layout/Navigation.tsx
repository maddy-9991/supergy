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
import{ Lightbulb, Person, WorkspacePremium, Summarize, PeopleAlt, Settings, ChatBubbleOutline, Logout }  from "@mui/icons-material";
import theme from '../../config/theme';
import Link from 'next/link'
import { navigationRoutes } from "../../routes/NavigationRoutes";

const listItems = [
  {
    listIcon: <PieChartIcon/>,
    listText: "Übersicht",
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: <ConfirmationNumberIcon/>,
    listText: "Elektroplanung",
    route: navigationRoutes.DASHBOARD
  },
  {
    listIcon: <Lightbulb/>,
    listText: "Energieerzeugung",
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: <Person/>,
    listText: "Komponenten",
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: <WorkspacePremium/>,
    listText: "Optimierung",
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: <Summarize/>,
    listText: "Berichte",
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: <PeopleAlt />,
    listText: "Anbieterverzeichnis",
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: <Settings />,
    listText: "Einstellungen",
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: '',
    listText: '',
    route: ''
  },
  {
    listIcon: '',
    listText: '',
    route: ''
  },
  {
    listIcon: '',
    listText: '',
    route: ''
  },
  {
    listIcon: <ChatBubbleOutline/>,
    listText: 'Support',
    route: navigationRoutes.ABOUT
  },
  {
    listIcon: <Logout/>,
    listText: 'Abmelden',
    route: navigationRoutes.ABOUT
  }
];

export default function Navigation() {
  const sideList = () => (
      <Box sx={{width: 250,background: "#363740", height:'100%'}}>
          <Avatar
            src="https://i.ibb.co/rx5DFbs/avatar.png"
            alt="Juaneme8"
            variant="square"
            sx={{    padding: "1rem",
            width: theme.spacing(13),
            height: theme.spacing(13)}}
          />
          <List>
            {listItems.map((listItem, index) => (
              <Link href={listItem.route} key={index}>
                <ListItem sx={{color: "#A4A6B3"}} key={index}>
                  <ListItemIcon sx={{color: "#A4A6B3"}}>
                    {listItem.listIcon}
                  </ListItemIcon>
                  <ListItemText primary={listItem.listText} />
              </ListItem>
              </Link>

            ))}
          </List>

        <Divider />

      </Box>
  );

  return (
    <>
      <Box component="nav">{sideList()}</Box>
    </>
  );
}
