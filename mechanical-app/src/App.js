import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MechanicProfile from './pages/MechanicProfile';
import RegisterMechanic from './pages/MechanicRegister';
import PartsStore from './pages/PartsStore';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/Shared/PrivateRoute';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path= "register-mechanic" component={RegisterMechanic}/>
          <PrivateRoute path="/mechanic/:id" component={MechanicProfile} />
          <PrivateRoute path="/parts-store" component={PartsStore} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
