import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Posts from './components/post/Posts';  
import NewPost from './components/post/NewPost';
import Post from './components/post/Post';
import Homebase from './components/homebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App/>
  
    </BrowserRouter>
  </React.StrictMode>
);