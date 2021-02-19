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
import Grid from "@material-ui/core/Grid";

import Posts from "./components/Posts"
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

  const [posts, setPosts] = useState([
    {
      body: ": (",
      created: "2021-02-03T06:13:44.896477Z",
      down_votes: 0,
      id: 63,
      sentiment: "b",
      total_votes: 0,
      up_votes: 0,
      update: "2021-02-03T06:13:44.896496Z",
      url: "http://127.0.0.1:8000/api/post/63"
    },
  ])

  const fetchPosts = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/post/")
    const data = await res.json()
    console.log(data)
    return data
  }
useEffect(fetchPosts)

const handleUpVote = (id) => {
  console.log('Up', id)
}

const handleDownVote = (id) => {
  console.log('Down', id)
}

const handleAdd = (task) => {
  console.log(task)
}

  return (
    
      <Container maxWidth='md'>
        <div className='container'>
          <header className='App-header'>
          <TopBar />
          <Header />
          </header>
          <div className='Post-form'>
          <PostForm onAdd={handleAdd}/> 
          </div>
          <div className='Post-card'>
          <Posts posts={posts} onDown={handleDownVote} onUp={handleUpVote}/>
          </div>
        </div>
      </Container>
    
  );
}

export default App;
