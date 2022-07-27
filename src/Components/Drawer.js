import react from 'react'
import { motion } from 'framer-motion'
function Drawer(props) {

    return (
        <div className='drawer'>
            <motion.img class="logo" src="https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-Transparent-HD-Photo.png" />
            <input class="search" placeholder="Search drinks.." />
            <div className="itemParent">
                {
                    props.drinks.map((drink,index)=>{
                        return(

                            <div className="itemList" key={index} onClick={()=>props.onDrrinkClick(index)}>
                            <div lassName="imageSide">
                                <img class="avatar" src={drink.imageSrc} />
                            </div>
                            <div className="nameSide">
                                <p class="text-white">{drink.name} | {drink.percentage}</p>
        
                                <h6 class="text-white">    </h6>
        
        
        
                            </div>
                        </div>
                        )

                    })
                }
              
            
            </div>
        </div>
    )
}

export default Drawer