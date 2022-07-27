import react, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const variants_ = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 0.3
        }
    },
    exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' }

    }
}
function LogIn() {
    const navigate = useNavigate();
    function gotoForms() {
        navigate('/UploadForm')
    }
    return (
        <motion.div className="loginDetails pt-4 " variants={variants_} initial="hidden" exit="exit"  animate="visible">
            <motion.div initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, stiffness: 200, type: "spring" }}>
                <form className="login">
                    <h4 className="text-white">Admin Login</h4>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <motion.Button onClick={gotoForms} className="getStarted" initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1, stiffness: 200, type: "spring" }} type="submit">Log In</motion.Button>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default LogIn