import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createTheme, ThemeProvider} from "@mui/material";
import RebarDocs from "./pages/Rebar";

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#8e0507',
        },
        secondary: {
            main: '#7b7b7b',
        },
        background: {
            default: '#3d3d3d',
            paper: '#2b2b2b',
        },
        text: {
            primary: '#fff',
            icon: '#fff'
        },
        divider: 'rgba(197,197,197,0.12)',
    },
    components: {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: '#fff'
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    color: '#aaa'
                }
            }
        }
    }
});

const DOCS = [
    {
        title: "Tutorials",
        expanded: true,
        items: [
            {
                title: "Hello",
                items: [
                    {
                        title: "std::exception",
                    },
                    {
                        title: "rebar::exception"
                    }
                ]
            }
        ]
    },
    {
        title: "Implementing Rebar",
        items: [
            {
                title: "Hello",
                items: [
                    {
                        title: "std::exception",
                    },
                    {
                        title: "rebar::exception"
                    }
                ]
            }
        ]
    },
    {
        title: "Writing Rebar",
        items: [
            {
                title: "Goodbye",
                items: [
                    {
                        title: "std::exception",
                    },
                    {
                        title: "rebar::exception"
                    }
                ]
            }
        ]
    },
    {
        title: "Exploring Rebar",
        items: [
            {
                title: "Goodbye",
                items: [
                    {
                        title: "std::exception",
                    },
                    {
                        title: "rebar::exception"
                    }
                ]
            }
        ]
    }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RebarDocs>{DOCS}</RebarDocs>
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
