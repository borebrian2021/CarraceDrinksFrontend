import logo from './logo.svg';
import './App.css';
import './font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import LogIn from './Components/LogIn'
import RoutesAnimator from './Components/RoutesAnimator'
import {
  BrowserRouter as Router,  Routes,  Route,useLocation
}from "react-router-dom";
// import {motion} from 'framer-motion'
function App() {
  return (
              <Router>
              <NavBar/>
              <RoutesAnimator/>
              <Footer/>
              </Router>
      

  );
}

export default App;
