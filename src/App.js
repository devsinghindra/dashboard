import React from 'react';
import './App.css';
import Home from './component/mainComponent/Home';
import Dashboard from './component/mainComponent/Dashboard';
import Hashtag from './component/mainComponent/Hashtag';
import Overall from './component/mainComponent/Overall';
import {Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
         
        <Route exact path="/dashboard" component={Dashboard} />
       
        <Route exact path="/dashboard/hashtag" component={Hashtag} />
                   
        <Route exact path="/dashboard/overall" component={Overall} />
         
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
  );
}

export default App;
