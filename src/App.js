import './App.css'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'


import Header from './components/Header'
function App() {
  return (
    <Container maxWidth='xs'>
    <div className="container">
      <header className='App-header'>
      <Header />
      </header>
    </div>
    </Container>
  );
}

export default App;
