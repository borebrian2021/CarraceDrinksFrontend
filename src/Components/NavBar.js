// import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const initNavigation = useNavigate();

    function goToLogin(){
        initNavigation('/Login')
    }
    function goHome(){
        initNavigation('/')
    }
    return (
        <motion.div className="nav-bar"
            transition={{ type: "spring", duration: 0.2, stiffness: 200 }}
            initial={{ y: -250 }}
            animate={{
                y: 0
            }}
        >
            <div className="leftSide" onClick={goHome}><motion.img transition={{ duration: 0.8, delay: 1 }} initial={{ opacity: "0" }} animate={{ opacity: 1 }} class="logo" src="./images/carraceLogo.png" /><small class="logoText">Carrace Drinks</small>  </div>
            <div className="rightSide" onClick={goToLogin}>

                <span class="icons_"  onClick={goToLogin}><i class="fa fa-user"></i></span>
            </div>

        </motion.div>
    )
}



export default NavBar