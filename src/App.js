import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App () {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
    return (
      <div>
        <Router>
          <NavBar mode = {mode} toggleMode = {toggleMode} />
          <LoadingBar
          height = {5}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} apikey = {apikey}  key="general" pageSize={6} country='in' category='general' />} />
            <Route exact path="/business" element={<News setProgress = {setProgress} apikey = {apikey}  key="business" pageSize={6} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} apikey = {apikey}  key="entertainment" pageSize={6} country='in' category='entertainment' />} />
            <Route exact path="/health" element={<News setProgress = {setProgress} apikey = {apikey}  key="health" pageSize={6} country='in' category='health' />} />
            <Route exact path="/science" element={<News setProgress = {setProgress} apikey = {apikey}  key="science" pageSize={6} country='in' category='science' />} />
            <Route exact path="/sports" element={<News setProgress = {setProgress} apikey = {apikey}  key="sports" pageSize={6} country='in' category='sports' />} />
          </Routes>
        </Router>
      </div>

    )
}


export default App;