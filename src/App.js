import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import NoMatch from './NoMatch';
import UserProfile from './UserProfile';
import BackButton from './BackButton';
import ForwardButton from './ForwardButton';
import GoHomeButton from './GoHomeButton';

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {
  return (
    <Router>
      <div className='App'>
        <GoHomeButton />
        <BackButton />
        <ForwardButton />
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        {Array(10).fill().map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`}>User {id}</Link>
          </div>
        ))}
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/About' >
            <About />
          </Route>
          <Route path='/user/:userId'>
            <UserProfile />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
