import React, { Component } from 'react';
// import { Route, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

// Commpontents
import Wrapper from "./components/Wrapper";
import Nav from './components/Nav';
import Login from './components/Login';
import Create from './components/Create';
import Quiz from './components/Quiz';
import Home from './components/Home';
import Friends from './components/Friends';
import Friend from './components/Friend';
import Player from './components/Player';
import Browse from './components/Browse';
import Stats from './components/Stats';
import Saved from './components/Saved';
import Footer from './components/Footer';

import './App.css';

class App extends Component {

  render() {
    const App = () => (
      <div>
        <Nav/>
        <Wrapper>
            <Route exact path="/home" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/" component={Login} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/friend" component={Friend} />
            <Route exact path="/player" component={Player} />
            <Route path="/browse" component={Browse} />

            <Route path="/browseAll" component={Browse} />
            <Route path="/browseLife" component={Browse} />
            <Route path="/browseFood" component={Browse} />
            <Route path="/browseSocial" component={Browse} />
            <Route path="/browseTravel" component={Browse} />
            <Route path="/browseViolent" component={Browse} />

            <Route exact path="/stats" component={Stats} />
            <Route exact path="/saved" component={Saved} />

        </Wrapper>
        <Footer/>

      </div>
    )
    return (
      <App/>
    );
  }
}

export default App;
