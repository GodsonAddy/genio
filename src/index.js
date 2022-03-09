import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { unstable_createMuiStrictModeTheme as createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      palette: {
        primary: {
          main: '#017189'
        }
      }
    },
    fontFamily: ["Nunito Sans"].join(","),
  },
  palette: {
    globalAccent: '#017189',
    globalAccentTxt: "white",
    primary: {
      main: '#017189'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
