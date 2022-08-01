import react, { useState } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
const variants_ = {
    hidden: {
        opacity: 0,
        // x:'100vw'
    },
    visible: {
        opacity: 1,
        // x:0,
        transition: {
            type: 'spring',
            delay: 0.8
        }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }

    }
}
function DrinkBody() {
    const history = useNavigate();
    const proceed = (() => {
        history('/DrinksDetails')
    }
    );

    return (
        <motion.div variants={variants_} initial="hidden" animate="visible" exit="exit" className="container-fluid mt-5  hundred">
            <div class="row bg_dark">
                <div class="col-12 col-lg-6 col-md-6 col-sm-6 p-5 center_first">
                    {/* <motion.img initial={{x:1500}} animate={{x:-200}} transition={{duration:0.8, delay:1, stiffness:200,type: "spring"}} src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/5.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="http://images.squarespace-cdn.com/content/v1/6159b81b83700f2629a0a5d4/1639728422593-TOXWZTBTET80PQL5KW1R/glenfiddich+15.png" class="spring1"/>

                  <motion.img initial={{x:1500}} animate={{x:-220}} transition={{duration:1.2, delay:1.3, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/4.png" class="spring2"/>
                */}
                    <motion.img initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1, stiffness: 120, type: "spring" }} src="../../images/onWelcome.png" className="logoBig" />
                    <motion.h4 className="p_white " initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.2, stiffness: 120, type: "spring" }} >Carrace Drinks</motion.h4>
                    <motion.p className="p_white" initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.4, stiffness: 120, type: "spring" }} >Carrace Drinks,we are trusted by millions to  discover vast collection of liquor,choose the right drink for you every moment.</motion.p>
                    <motion.Button onClick={proceed} className="getStarted" initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.6, stiffness: 120, type: "spring" }}>Get Started
                    </motion.Button>
                </div>
            
            <div  class="col-12 col-lg-6 col-md-6 col-sm-6 p-5 center_first center_flex">
            <motion.div initial={{scaleX:0,scaleY:0}} animate={{scaleX:1,scaleY:1}} transition={{duration:0.3 ,delay:1}} exit={{opacity:0}} class="image_shoot_card"><img src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="image_shoot"/></motion.div>
            <motion.div initial={{scaleX:0,scaleY:0}} animate={{scaleX:1,scaleY:1}} transition={{duration:0.3 ,delay:1}} exit={{opacity:0}} class="image_shoot_card"><img src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="image_shoot"/></motion.div>

            <motion.div initial={{scaleX:0,scaleY:0}} animate={{scaleX:1,scaleY:1}} transition={{duration:0.3 ,delay:1}} exit={{opacity:0}} class="image_shoot_card"><img src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="image_shoot"/></motion.div>

            <motion.div initial={{scaleX:0,scaleY:0}} animate={{scaleX:1,scaleY:1}} transition={{duration:0.3 ,delay:1}} exit={{opacity:0}} class="image_shoot_card"><img src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="image_shoot"/></motion.div>

            <motion.div initial={{scaleX:0,scaleY:0}} animate={{scaleX:1,scaleY:1}} transition={{duration:0.3 ,delay:1}} exit={{opacity:0}} class="image_shoot_card"><img src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="image_shoot"/></motion.div>

             

            </div>
            </div>
        </motion.div>
    )
}
export default DrinkBody