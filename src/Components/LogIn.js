import react, { useState } from 'react'
import { motion } from 'framer-motion'
function LogIn() {
    return (
        <motion.div className="loginDetails pt-4 ">
            <form class="row bg_dark3">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12 p-5  ">
             

                    <h4 class="text-white">Admin Log In</h4>
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.2, stiffness: 200, type: "spring" }} class="text-white">Username:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.4, stiffness: 200, type: "spring" }} placeholder='Enter Username...' class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.6, stiffness: 200, type: "spring" }} class="text-white">Password:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.8, stiffness: 200, type: "spring" }} placeholder='Enter password...' type="password" class="form-control m-2" />
                   

                    

                    <motion.Button  className="getStarted" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 3, stiffness: 200, type: "spring" }} type="submit">Submit</motion.Button>
                </div>
            </form>


        </motion.div>
    )
}

export default LogIn