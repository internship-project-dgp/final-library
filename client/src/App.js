
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./screens/Login"
import AdminLogin from "./screens/AdminLogin"
import LibraryHome from "./screens/LibraryHome"

import Dashboard from "./screens/Dashboard"
import SignInForm from "./components/Form/Register"
import Home from './screens/Home';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Route path="/" exact component={Home} />
        <Route path="/Library" exact component={LibraryHome} />
        <Route path="/register" exact component={SignInForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/adminLogin" exact component={AdminLogin} />
        <Route path="/dashboard"  component={Dashboard} />

      </BrowserRouter>
    </div>
  );
}

export default App;
