import react, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Drawer from './Drawer'
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
            delay: 0.5
        }
    },
    exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' }

    }
}

function DetailsBody(props){

    console.log(props.combinedObJect)
    return(
        <motion.div class="row bg_dark2"  variants={variants_} initial="hidden" animate="visible" exit="exit">
           <div class="col-12 col-lg-12 col-md-12 col-sm-12 p-5 center_first">
               <motion.img initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.4, stiffness: 200, type: "spring" }} exit={{x:1500}} src={props.combinedObJect.imageSrc} className="logoBig" />
               <motion.div className="labelTitle " initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.6, stiffness: 200, type: "spring" }} ><h3>{props.combinedObJect.name} | {props.combinedObJect.percentage} | {props.combinedObJect.CountryOfOrigin}</h3><br></br><h2 className='text-white'>Ksh. {props.combinedObJect.price} .00</h2></motion.div>
               <motion.p className="p_white" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 1.8, stiffness: 200, type: "spring" }} >{props.combinedObJect.description}</motion.p>
               <motion.Button className="getStarted" initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ duration: 0.8, delay: 2, stiffness: 200, type: "spring" }}>Comment</motion.Button>
            </div>


       </motion.div>
    )
}
function DrinksDetails() {
    const [switchDrinks, setSwitchDrink] = useState(true)
    const [category, setCategory] = useState()
    const [name, setName] = useState()
    const [capacity, setCapacity] = useState()
    const [image, setImage] = useState()
    const [price, setPrice] = useState()
    const [percentage, setPercentage] = useState()
    const [description, setDescription] = useState()
    const [cog, setCog] = useState()
    const [drinks, setDrinks] = useState([])
    
    const [combinedObJect,setCombined]=useState([]);

    function handleDrinkClick(index1) {
        setSwitchDrink(false)
        setCombined();
        setImage(drinks[index1].imageSrc)
        setCombined(drinks[index1]);
        setTimeout(() => {
            setSwitchDrink(true)
          }, 500);
        

        console.log(combinedObJect)
    
    }
    useEffect(() => {
        fetch('http://localhost:3000/drinks')
            .then((data) => data.json())
            .then((data1) => {
                setDrinks(data1);
            })
    }, [])

    return (
<motion.div variants={variants_} initial="hidden" animate="visible" exit="exit" className="drinksPage" >

<Drawer drinks={drinks} onDrrinkClick={handleDrinkClick} />
{switchDrinks &&  <DetailsBody combinedObJect={combinedObJect}/>}

</motion.div>
        )
}






export default DrinksDetails