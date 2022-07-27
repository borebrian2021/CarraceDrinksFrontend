import logo from './logo.svg';
import './App.css';
import './font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import DrinkBody from './Components/DrinkBody'
import DrinksDetails from './Components/DrinksDetails'
import LogIn from './Components/LogIn'

import UploadForm from './Components/UploadForm'

import Drawer from './Components/Drawer'
// import {motion} from 'framer-motion'
function App() {
  return (
    <div >
      <NavBar />
      {/* <Drawer/> */}
      <LogIn/>
    
      {/* <DrinksDetails /> */}
      {/* <DrinkBody /> */}
      {/* <UploadForm/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
