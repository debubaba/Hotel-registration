import React from 'react';
import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/Home.js'
import Rooms from './pages/Rooms.js'
import SingleRoom from './pages/SingleRoom.js'
import Error from './pages/Error.js'

import Navbar from './components/Navbar.js'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/rooms" component={Rooms} />
       <Route exact path="/rooms/:type" component={SingleRoom} />
       <Route component={Error} />
     </Switch>
    </>
  );
}

export default App;
