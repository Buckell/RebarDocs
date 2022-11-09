import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Accordion, AccordionDetails, AccordionSummary, ListSubheader} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import "./Rebar.css";

const drawerWidth = 240;

export default function RebarDocs(props) {
    const [currentPage, switchPage] = useState(<></>);
    const [activePage, setActivePage] = useState(localStorage.getItem("REBARDOC.SelectedPage"));

    let pages = {};

    useEffect(() => {
        let Page = pages[activePage];
        switchPage(<Page />);
        localStorage.setItem("REBARDOC.SelectedPage", activePage);
    }, [activePage])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" fontSize="25px" fontWeight="900">
                        REBAR DOCUMENTATION
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    {
                        props.children.map((majorCategory) => {
                            return (
                                <Accordion defaultExpanded={majorCategory.expanded || false} sx={{ backgroundColor: "#333" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{majorCategory.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List dense sx={{ marginTop: "-30px" }}>
                                            {majorCategory.items.map((minorCategory) => {
                                                return (
                                                    <>
                                                        <ListSubheader sx={{ marginTop: "10px", backgroundColor: "#333", color: "#977" }}>{minorCategory.title}</ListSubheader>
                                                        {
                                                            minorCategory.items.map((item) => {
                                                                const key = majorCategory.title + "." + minorCategory.title + "." + item.title
                                                                pages[key] = item.Element;

                                                                return (
                                                                    <ListItem key={key} disablePadding>
                                                                        <ListItemButton selected={activePage === key} onClick={() => setActivePage(key)}>
                                                                            <ListItemText primary={item.title} />
                                                                        </ListItemButton>
                                                                    </ListItem>
                                                                );
                                                            })
                                                        }
                                                    </>
                                                );
                                            })}
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })
                    }
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 4, maxWidth: 1000 }}>
                <Toolbar />
                {currentPage}
            </Box>
        </Box>
    );
}