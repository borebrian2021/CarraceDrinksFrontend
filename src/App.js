import logo from './logo.svg';
import './App.css';
import './font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/NavBar'
import DrinkBody from './Components/DrinkBody'
import DrinksDetails from './Components/DrinksDetails'
import LogIn from './Components/LogIn'

import UploadForm from './Components/UploadForm'

import Drawer from './Components/Drawer'
// import {motion} from 'framer-motion'
function App() {
  return (
    <div className="Navbar">
     <NavBar/>
    {/* <Drawer/> */}
    {/* <LogIn/>
     */}

    {/* <DrinkBody />
     */}
     {/* <DrinksDetails/>
      */}
<UploadForm/>

    </div>
  );
}

export default App;
