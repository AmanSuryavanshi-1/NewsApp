import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { useState } from 'react'

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


// export default class App extends Component {
  const App =() =>{
  const pageSize=8;
  
  const apiKey = process.env.REACT_APP_NEWS_API

  // state={
  //   progress:0
  // }
  const[progress, setProgress]= useState(0)
  // setProgress = (progress)=>{
  //   setState({progress: progress})   //arrow function is required to use progress()
  // }


    return (
<BrowserRouter>
<Navbar/>
<LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />


      <div>
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
        <Route exact path="/entertainment" element= {<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </div>
 </BrowserRouter>
    )
  }
export default App;
