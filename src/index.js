import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createTheme, ThemeProvider} from "@mui/material";
import RebarDocs from "./pages/Rebar";

import DOC_TUTORIALS from "./pages/docs/tutorials/doc";

const DOCS = [
    DOC_TUTORIALS
];

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#8e0507'
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
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: '100px'
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
