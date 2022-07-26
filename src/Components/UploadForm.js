import react, { useState } from 'react'
import { motion } from 'framer-motion'
function UploadForm() {
    return (
        <motion.div className="ddrinksDetails pt-4 ">
            <form class="row bg_dark2">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12 p-5  text-left">
                <h6 class="text-white">Brian Kimutai Koskei</h6>
                <h6 class="text-white">Admin</h6>

                    <h4 class="text-white">Upload Product</h4>
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.2, stiffness: 200, type: "spring" }} class="text-white">Brand Name:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.4, stiffness: 200, type: "spring" }} placeholder='Enter Brand name...' class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.6, stiffness: 200, type: "spring" }} class="text-white">Capacitx:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 0.8, stiffness: 200, type: "spring" }} placeholder='Enter capacity...' class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1, stiffness: 200, type: "spring" }} class="text-white">Categorx:</motion.label>

                    <motion.select initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2, stiffness: 200, type: "spring" }} className="form-control m-2">
                        <option value="Wine" >Wine</option>
                        <option value="Spirit" >Spirit</option>
                        <option value="Gin" >Gin</option>
                        <option value="Wiskey" >Wiskey</option>
                        <option value="rum" >rum</option>
                        <option value="Tequila" >Tequila</option>
                    </motion.select>

                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.4, stiffness: 200, type: "spring" }} class="text-white">Price:</motion.label>
                    <motion.input  initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.6, stiffness: 200, type: "spring" }}  placeholder='Enter price...' class="form-control m-2"/>

                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.8, stiffness: 200, type: "spring" }} class="text-white">Alcohol Percentage:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 2, stiffness: 200, type: "spring" }}  placeholder='Enter alcohol percentage...' class="form-control m-2"/>
               
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 2.2, stiffness: 200, type: "spring" }} class="text-white">Description:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 2.4, stiffness: 200, type: "spring" }}  placeholder='Enter description...' class="form-control m-2"/>
               
                    
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 2.6, stiffness: 200, type: "spring" }} class="text-white">Brand:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 2.8, stiffness: 200, type: "spring" }}  placeholder='Enter brand...' class="form-control m-2"/>
               





                    <motion.Button  className="getStarted" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 3, stiffness: 200, type: "spring" }} type="submit">Submit</motion.Button>
                </div>
            </form>


        </motion.div>
    )
}

export default UploadForm