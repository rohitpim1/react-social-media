import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Divider
} from "@mui/material";

import React from 'react'

const Sidebar = ({mode,setMode}) => {
  return (
      <Box flex={1} p={1} sx={{display:{xs:"none",sm:"block"}}}>
        <Box position="fixed" sx={{marginTop:"60px"}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                      <ListItemIcon>
                          <Home/>
                      </ListItemIcon>
                      <ListItemText primary="Homepage"/>
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <Article/>
                        </ListItemIcon>
                        <ListItemText primary="pages"/>
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                     <ListItemIcon>
                         <Storefront/>
                     </ListItemIcon>
                     <ListItemText primary="Marketplace"/>
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>

                <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
                <ListItemText primary="Friends"/>
                </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                     <ListItemIcon>
                         <Settings/>
                     </ListItemIcon>
                     <ListItemText primary="Settings"/>
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <AccountBox/>
                        </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>

                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <ModeNight/>
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
      </Box>
  )
}

export default Sidebar
