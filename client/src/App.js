
import React from 'react';
import Navigation from './components/navigation/NavigationBar';
import './App.css';
import Layout from './components/layout/Layout';
import {useState, useEffect} from 'react'
import Posts from './components/post/Posts';  
import NewPost from './components/post/NewPost';
import Post from './components/post/Post';
import Homebase from './components/homebase';
import Workouts from './components/post/workouts';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  // const [workouts, setWorkouts] = useState ([]);

  // useEffect(() => {
  //     fetch('http://localhost:9292/workouts')
  //     .then (res => res.json())
  //     .then (data => setWorkouts(data))
  // }, [])

  
  //console.log(workoutt)

  return (
   <div>
    
      <Routes>
          <Route exact path="/" element={<Homebase />} />
          <Route path="/exercise_plan" element={<Posts/>} />  
          <Route path="/new_exercise" element={<NewPost />} />
          <Route path="/all_workouts" element={<Workouts />} />
    
      </Routes>
   </div>
    )
  
  }

export default App;