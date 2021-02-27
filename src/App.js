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
import Footer from "./components/Footer";

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
  const [sortBySentiment, setSortBySentiment] = useState('')
  const [sortKey, setSortKey] = useState('created')

  

useEffect(() =>{
  const getPosts = async () => {
    const postsFromServer = await fetchPosts()
    setPosts(sort_by_key(postsFromServer, sortKey))  
  }
  getPosts()
})

const toggleSort = async (sort) => {
  setSortBySentiment(sort)
  //console.log(sort)
  const res = await fetch(`http://127.0.0.1:8000/api/post/${sort}`)
  const data = await res.json()
  
  setPosts(sort_by_key(data, sortKey))
  //console.log(data)
}


function sort_by_key(array, key)
{
  //adapted from David Brainer on stack overflow
 return array.sort(function(a, b)
 {
  var x = a[key]; var y = b[key];
  return ((x > y) ? -1 : ((x < y) ? 1 : 0));
 });
}


const fetchPosts = async () => {
  const res = await fetch(`http://127.0.0.1:8000/api/post/${sortBySentiment}`)
  const data = await res.json()
  //console.log(data)
  return data
} 

const fetchPost = async (id) => {
  const res = await fetch(`http://127.0.0.1:8000/api/post/${id}`)
  const data = await res.json()
  //console.log(data)
  return data
} 


const handleUpVote = async (id) => {
  const postToUpvote = await fetchPost(id)
  const upvotedPost = {...postToUpvote, up_votes: postToUpvote.up_votes++}
  const res = await fetch(`http://127.0.0.1:8000/api/post/${id}/up_vote/`,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }, body: JSON.stringify(upvotedPost)
  })
  const data = await res.json()
  const postsFromServer = await fetchPosts()
    setPosts(sort_by_key(postsFromServer, sortKey))  
  
}

const handleDownVote = async (id) => {
  const postToDownvote = await fetchPost(id)
  const downvotedPost = {...postToDownvote, down_votes: postToDownvote.down_votes++}
  const res = await fetch(`http://127.0.0.1:8000/api/post/${id}/down_vote/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }, body: JSON.stringify(downvotedPost)
  })
  //console.log('Down', id)
  const data = await res.json()
  const postsFromServer = await fetchPosts()
  setPosts(sort_by_key(postsFromServer, sortKey))
  
}



const handleAdd = async (post) =>{
  const res = await fetch('http://127.0.0.1:8000/api/post/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    }, body: JSON.stringify(post)
  })
  const data = await res.json()
  //console.log(data)
  setPosts(sort_by_key([...posts, data], sortKey))
}

const toggleSortKey = async (key) => {
  setSortKey(key)
  const res = await fetch(`http://127.0.0.1:8000/api/post/${sortBySentiment}`)
  const data = await res.json()
  console.log(sortKey)
  setPosts(sort_by_key(data, key))
} 

  return (
    
      <Container maxWidth='md'>
        <div className='container'>
          <header className='App-header'>
          <TopBar onSort={toggleSort} onKey={toggleSortKey} />
          <Header onAdd={() => setShowPostForm(!showPostForm)} showAdd={showPostForm}/>
          </header>
          {showPostForm && <div className='Post-form'>
          <PostForm onAdd={handleAdd}/> 
          </div>}
          <div className='Post-card'>
          <Posts posts={posts} onDown={handleDownVote} onUp={handleUpVote}/>
          </div>
        </div>
        <Footer />
      </Container>
    
  );
}

export default App;
