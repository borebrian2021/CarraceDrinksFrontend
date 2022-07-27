import react, { useState } from 'react'




import { motion } from 'framer-motion'
const [category,setContent]=useState("")
const [name,setName]=useState("")
const [capacity,setCapacity]=useState("")
const [image,setImage]=useState("")
const [drinkPoster,setdrinkPoster]=useState("")
const [smallDrink,setsmallDrink]=useState("")
const [price,setPrice]=useState("")
const [percentage,setPercentage]=useState("")
const [description,setDescription]=useState("")
const [cog,setCog]=useState("")
const [brand,setBrand]=useState("")

function handleSetCategory(e){
    setContent(e.target.value)
}








const variants_ = {
    hidden: {
        opacity: 0,
        x: '-100vw'
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
        x: '-100vw',
        transition: { ease: 'easeInOut' }

    }
}
function UploadForm() {
    return (
        <motion.div variants={variants_} initial="hidden" exit="exit" animate="visible" className="ddrinksDetails pt-4 ">
            <form class="row bg_dark2">
                <div class="col-12 col-lg-6 col-md-6 col-sm-12 p-5 center_first_flex">
                    <motion.img initial={{ scale:0 }} animate={{ scale:1}} transition={{ duration: 4, delay: 0.2, stiffness: 120, type: "spring" }} src="./images/bottles.png" className='bottles' />
                    <h6 class="text-white">Brian Kimutai Koskei</h6>
                    <h6 class="text-white">Admin</h6>
                    <h6 class="text-white">Bevarage upload form.</h6>
                </div>
                <div class="col-12 col-lg-6 col-md-6 col-sm-12 p-5  text-left">


                    <h4 class="text-white">Upload bevarage</h4>
                    <motion.label initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.2, stiffness: 120, type: "spring" }} class="text-white">Brand Name:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.3, stiffness: 120, type: "spring" }} placeholder='Enter Brand name...' class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.4, stiffness: 120, type: "spring" }} class="text-white">Capacitx:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.5, stiffness: 120, type: "spring" }} placeholder='Enter capacity...' class="form-control m-2" />
                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.6, stiffness: 120, type: "spring" }} class="text-white">Categorx:</motion.label>

                    <motion.select initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.7, stiffness: 120, type: "spring" }} className="form-control m-2">
                        <option value="Wine" >Wine</option>
                        <option value="Spirit" >Spirit</option>
                        <option value="Gin" >Gin</option>
                        <option value="Wiskey" >Wiskey</option>
                        <option value="rum" >rum</option>
                        <option value="Tequila" >Tequila</option>
                    </motion.select>

                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.8, stiffness: 120, type: "spring" }} class="text-white">Price:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 0.9, stiffness: 120, type: "spring" }} placeholder='Enter price...' class="form-control m-2" />

                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.0, stiffness: 120, type: "spring" }} class="text-white">Alcohol Percentage:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.1, stiffness: 120, type: "spring" }} placeholder='Enter alcohol percentage...' class="form-control m-2" />

                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.2, stiffness: 120, type: "spring" }} class="text-white">Description:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.3, stiffness: 120, type: "spring" }} placeholder='Enter description...' class="form-control m-2" />


                    <motion.label initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.4, stiffness: 120, type: "spring" }} class="text-white">Brand:</motion.label>
                    <motion.input initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.5, stiffness: 120, type: "spring" }} placeholder='Enter brand...' class="form-control m-2" />






                    <motion.Button className="getStarted" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.3, delay: 1.6, stiffness: 120, type: "spring" }} type="submit">Submit</motion.Button>
                </div>
            </form>


        </motion.div>
    )
}

export default UploadForm