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
  const [showPostForm, setShowPostForm] = useState(false)
  const [posts, setPosts] = useState([])


useEffect(() =>{
  const getPosts = async () => {
    const postsFromServer = await fetchPosts()
    setPosts(postsFromServer)  
  }
  getPosts()
}, [])

const fetchPosts = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/post/")
  const data = await res.json()
  console.log(data)
  return data
} 

const handleUpVote = async (id) => {

  setPosts([...posts])
}

const handleDownVote = async (id) => {

  console.log('Down', id)
  
}



const handleAdd = async (post) =>{
  const res = await fetch('http://127.0.0.1:8000/api/post/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }, body: JSON.stringify(post)
  })
  const data = await res.json()
  console.log(data)
  setPosts([...posts, data])
}

  return (
    
      <Container maxWidth='md'>
        <div className='container'>
          <header className='App-header'>
          <TopBar />
          <Header onAdd={() => setShowPostForm(!showPostForm)} showAdd={showPostForm}/>
          </header>
          {showPostForm && <div className='Post-form'>
          <PostForm onAdd={handleAdd}/> 
          </div>}
          <div className='Post-card'>
          <Posts posts={posts} onDown={handleDownVote} onUp={handleUpVote}/>
          </div>
        </div>
      </Container>
    
  );
}

export default App;
