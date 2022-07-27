import react from 'react'
import DrinkBody from './Components/DrinkBody'
import DrinksDetails from './Components/DrinksDetails'
import UploadForm from './Components/UploadForm'
import Drawer from './Components/Drawer'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { AnimatePresence  }  from 'framer-motion/dist/framer-motion'
import LogIn from './Components/LogIn'
import {
    BrowserRouter as Router,  Routes,  Route,useLocation
  }from "react-router-dom";
function RoutesAnimator(){
    const location=useLocation();
    return(
       
        <AnimatePresence>
        <Routes location={location} key={location.key}>
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
      
    )
}

export default RoutesAnimator