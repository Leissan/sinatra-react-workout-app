
import React from 'react';
import Navigation from './components/navigation/NavigationBar';
import './App.css';
import Layout from './components/layout/Layout';
import {useState, useEffect} from 'react'
import Posts from './components/post/Posts';  
import NewPost from './components/post/NewPost';
import Post from './components/post/Post';
import Homebase from './components/homebase';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  const [workoutt, setWorkoutt] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/workouts")
      .then((r) => r.json())
      .then((games) => setWorkoutt(games));
  }, []);
  
  console.log(workoutt)

  return (
    <Routes>
     <Route exact path="/" element={<Homebase />} />
     <Route path="/workout_plan" element={<Posts workoutt = {workoutt}/>} />  
     <Route path="/new_workout" element={<NewPost />} />
   
  </Routes>
  )}

export default App;