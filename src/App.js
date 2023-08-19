
import './App.css';
import {useState,useEffect} from 'react'
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

const App = ()=> {
  const apiKey = '653f1260d24d4dbdbe23ae47c11a256e'
  const[progress,setProgress] = useState(0);
  useEffect(()=>{
    setProgress(progress);
	}, [])

 
  // setProgress = (progress)=>{
  //   setState({progress : progress})
  // }
 
    return (
      
      <>
      <div>
      
        <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar/>
            <LoadingBar
        color='#f11946'
        progress={progress}
        />
            
        <Routes>
          <Route exact path="/" element ={<News setProgress={setProgress}  apiKey = {apiKey} key ="general" pageSize = {4} category = "general"/>} ></Route>
          <Route exact path="/business" element ={<News setProgress={setProgress}  apiKey = {apiKey} key = "business" pageSize = {4} category = "business"/>}></Route> 
          <Route exact path="/entertainment" element ={<News setProgress={setProgress}  apiKey = {apiKey} key = "entertainment" pageSize = {4} category = "entertainment"/>}></Route>
          <Route exact path="/general" element ={<News setProgress={setProgress}  apiKey = {apiKey} key = "general" pageSize = {4} category = "general"/>}></Route>
          <Route exact path="/health" element ={<News setProgress={setProgress}  apiKey = {apiKey} key = "health" pageSize = {4} category = "health"/>}></Route>
          <Route exact path="/science" element ={<News setProgress={setProgress}  apiKey = {apiKey} key = "science" pageSize = {4} category = "science"/>}></Route>
          <Route exact path="/technology" element ={<News setProgress={setProgress}  apiKey = {apiKey} key = "technology" pageSize = {4} category = "technology"/>}></Route>
          <Route exact path="/sports" element ={<News setProgress={setProgress}  apiKey = {apiKey} key = "sports" pageSize = {4 }category = "sports"/>}></Route>
        </Routes>

     
        
    </Router>
      
      </div>
      
      </>
    )
  }

  export default App