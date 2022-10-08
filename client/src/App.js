
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
import Workout from './components/post/Workout';
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";

function App() {

  const [workouts, setWorkouts] = useState ([]);

  useEffect(() => {
      fetch('http://localhost:9292/workouts')
      .then (res => res.json())
      .then (data => setWorkouts(data))
  }, [])

  

  return (
   <div>
    {/* {workouts.map((workout) => {
      workout.exercises.map((exercise) => {
      
      })
    })} */}
      <Routes>
          <Route exact path="/" element={<Homebase />} />
          <Route path="/exercise_plan" element={<Posts/>} />  
          <Route path="/all_workouts" element={<Workouts />} />
          <Route path='/all_workouts/:workoutId' element={<Workout workouts={workouts}/>} /> 
          <Route path="/new_exercise" element={<NewPost />} />
          
    
      </Routes>
   </div>
    )
  
  }

export default App;