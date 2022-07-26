// import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
function NavBar() {
    return (
        <motion.div className="nav-bar"
         transition={{ type: "spring", duration:0.6 ,delay:0.2, stiffness:200}}
        initial={{y:-250}}
        animate={{
y:0
          }  }
        >
            <div className="leftSide"><motion.img transition={{duration:0.8}} initial={{opacity:"0"}} animate={{opacity:1}} class="logo" src="./images/carraceLogo.png" /><small class="logoText">Carrace Drinks</small>  </div>
            <div className="rightSide">
                <input class="search" placeholder="search.." />
                <span class="icons"><i class="fa fa-user"></i></span>
            </div>

        </motion.div>
    )
}



export default NavBar