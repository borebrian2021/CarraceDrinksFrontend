import logo from './logo.svg';
import './App.css';
import './font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import LogIn from './Components/LogIn'
import {AnimatePresence} from 'framer-motion'
import DrinkBody from './Components/DrinkBody'
import DrinksDetails from './Components/DrinksDetails'
import UploadForm from './Components/UploadForm'
import Drawer from './Components/Drawer'
import {
  BrowserRouter as Router,  Routes,  Route,useLocation
}
from "react-router-dom";
// import {motion} from 'framer-motion'
function App() {
  const location=useLocation();
  return (
   
      <Router location={location} key={location.key}>
      <NavBar/>
      <AnimatePresence>
      <Routes >
      <Route exact  path='/' element={<DrinkBody/>}>
      </Route> 
     
      <Route exact  path='/DrinksDetails' element={<DrinksDetails/>}>
      </Route> 
      <Route exact  path='/LogIn' element={<LogIn/>}>
      </Route> 
      <Route exact  path='/UploadForm' element={<UploadForm/>}>
      </Route> 
      </Routes>
      </AnimatePresence>
      <Footer/>
      </Router>
    
   
      
     

  

  );
}

export default App;
