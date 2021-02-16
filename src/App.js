import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";

import PostForm from "./components/PostForm";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import "fontsource-roboto";

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 10,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

function App() {
  return (
    
      <Container maxWidth='md'>
        <div className='container'>
          <header className='App-header'>
          <TopBar />
          <Header />
          <PostForm />
          </header>
        </div>
      </Container>
    
  );
}

export default App;
