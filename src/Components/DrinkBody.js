import react,{useState} from 'react'
import {motion} from 'framer-motion'
function DrinkBody(){
    return(
        <motion.div  className="container-fluid  hundred">
            <div class="row bg_dark">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12 p-5 center_first">
                  {/* <motion.img initial={{x:1500}} animate={{x:-200}} transition={{duration:0.8, delay:1, stiffness:200,type: "spring"}} src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/5.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="http://images.squarespace-cdn.com/content/v1/6159b81b83700f2629a0a5d4/1639728422593-TOXWZTBTET80PQL5KW1R/glenfiddich+15.png" class="spring1"/>

                  <motion.img initial={{x:1500}} animate={{x:-220}} transition={{duration:1.2, delay:1.3, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/4.png" class="spring2"/>
                */}
<motion.img initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:1.4, stiffness:200,type: "spring"}} src="../../images/onWelcome.png" className="logoBig"/>
<motion.h3 className="p_white" initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} >Carrace Drinks</motion.h3>
<motion.p className="p_white" initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:1.8, stiffness:200,type: "spring"}} >Carrace Drinks Trusted by millions to discover and buy the right wine every time.</motion.p>
<motion.Button className="getStarted" initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:2, stiffness:200,type: "spring"}}>Get Started</motion.Button>
                </div>
             

            </div>


        </motion.div>
    )
}

export default DrinkBody