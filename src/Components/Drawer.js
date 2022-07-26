import react from 'react'
import {motion} from 'framer-motion'
function Drawer() {

    return (
        <div className='drawer'>
            <motion.img   class="logo" src="https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-Transparent-HD-Photo.png" />
            <input class="search" placeholder="Search drinks.." />
            <div className="itemParent">
            <div className="itemList">

            <div className="imageSide">
                <img class="avatar" src="https://www.pngitem.com/pimgs/m/275-2750746_jameson-irish-whiskey-hd-png-download.png" />
            </div>
            <div className="nameSide">
               <h5 class="text-white">Vodka</h5>
            </div>
            </div></div>
        </div>
    )
}

export default Drawer