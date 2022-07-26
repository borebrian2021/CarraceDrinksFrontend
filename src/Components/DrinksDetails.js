import react,{useState} from 'react'
import {motion} from 'framer-motion'
function DrinksDetails(){
    return(
        <motion.div  className="  ddrinksDetails">
            <div class="row bg_dark2">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12 p-5 center_first">
                  {/* <motion.img initial={{x:1500}} animate={{x:-200}} transition={{duration:0.8, delay:1, stiffness:200,type: "spring"}} src="https://i.ibb.co/wQ4G0w1/flatiron-brew.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/5.png" class="spring1"/>
                  <motion.img initial={{x:1500}} animate={{x:-70}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} src="http://images.squarespace-cdn.com/content/v1/6159b81b83700f2629a0a5d4/1639728422593-TOXWZTBTET80PQL5KW1R/glenfiddich+15.png" class="spring1"/>

                  <motion.img initial={{x:1500}} animate={{x:-220}} transition={{duration:1.2, delay:1.3, stiffness:200,type: "spring"}} src="https://images.punkapi.com/v2/4.png" class="spring2"/>
 */}
 

<motion.img initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:1.4, stiffness:200,type: "spring"}} src="https://purepng.com/public/uploads/large/purepng.com-alcohol-bottlebottle-food-wine-object-alcohol-beverage-cocktail-liquor-whiskey-drunk-941524624582wlel2.png" className="logoBig"/>


<motion.div className="labelTitle " initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:1.6, stiffness:200,type: "spring"}} ><h3>Lanson Noble Cuvee | 40% | Scotland</h3><br></br><h2 className='text-white'>Ksh. 10,000.00</h2></motion.div>

<motion.p className="p_white" initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:1.8, stiffness:200,type: "spring"}} >This product is currently in stock and you can place your order now. Through our efficient alcohol delivery system, affordable pricing, and large product collection, we have been rated the best online liquor store in Nairobi. Ordering alcohol online has never been easier; you have two options; do a pre-order or do the regular order. You will receive your products in about 30 minutes. Purchase from one bottle, or cases at wholesale prices.</motion.p>
<motion.Button className="getStarted" initial={{x:1500}} animate={{x:0}} transition={{duration:0.8, delay:2, stiffness:200,type: "spring"}}>Get Started</motion.Button>


                </div>
             

            </div>


        </motion.div>
    )
}

export default DrinksDetails