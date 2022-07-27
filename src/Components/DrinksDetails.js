import react, { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import Drawer from './Drawer'
const variants_ = {
    hidden: {
        opacity: 0,
        x:'100vw'
    },
    visible: {
        opacity: 1,
        x:0,
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


function DrinksDetails() {
    const [category, setCategory] = useState()
    const [name, setName] = useState()
    const [capacity, setCapacity] = useState()
    const [image, setImage] = useState()
    const [price, setPrice] = useState()
    const [percentage, setPercentage] = useState()
    const [description, setDescription] = useState()
    const [cog, setCog] = useState()
    const [drinks,setDrinks]=useState([])
     function handleDrinkClick(index1){
    setImage(drinks[index1].imageSrc)
     }
    useEffect(()=>{
        fetch('http://localhost:3000/drinks')
        .then((data)=>data.json())
        .then((data1)=>{
        setDrinks(data1);})},[])
    return (
        <motion.div variants={variants_} initial="hidden" animate="visible" exit="exit" className="drinksPage" >

            <Drawer drinks={drinks} onDrrinkClick={handleDrinkClick}/>

            <div class="row bg_dark2">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12 p-5 center_first">
    


                    <motion.img initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.4, stiffness: 200, type: "spring" }} src={image} className="logoBig" />


                    <motion.div className="labelTitle " initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.6, stiffness: 200, type: "spring" }} ><h3>Lanson Noble Cuvee | 40% | Scotland</h3><br></br><h2 className='text-white'>Ksh. 10,000.00</h2></motion.div>

                    <motion.p className="p_white" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.8, stiffness: 200, type: "spring" }} >This product is currently in stock and you can place your order now. Through our efficient alcohol delivery system, affordable pricing, and large product collection, we have been rated the best online liquor store in Nairobi. Ordering alcohol online has never been easier; you have two options; do a pre-order or do the regular order. You will receive your products in about 30 minutes. Purchase from one bottle, or cases at wholesale prices.</motion.p>
                    <motion.Button className="getStarted" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 2, stiffness: 200, type: "spring" }}>Get Started</motion.Button>


                </div>


            </div>
        </motion.div>
    )
}

export default DrinksDetails