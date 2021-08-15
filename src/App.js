import './App.css';
import React,{useState} from "react"
import Header from "./Header";
import Banner from "./Banner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import SearchPage from "./SearchPage";
import Home from "./Home";
import Footer from "./Footer";
 
function App() {
  
  return (
    <div className="app">
     <Router>
      <Header/>
         <Switch>
          <Route exact path="/">
            <Home/> 
          </Route>
          <Route exact path='/search'>
          
           <SearchPage/> 
           <Footer/>
          </Route>

         </Switch>
      </Router> 
     
      </div>
  );
}

export default App;
