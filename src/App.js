import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/Users';
import { Form } from './components/Form';
import { UserDetail } from './components/UserDetail';

const App = () => {
  return (
    <div className="App">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </nav>

      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/users" Component={Users}></Route>
        <Route path="/form" Component={Form}></Route>
        <Route path="/users/:id" Component={UserDetail}></Route>
      </Routes>
    </div>
  );
};

export default App;
