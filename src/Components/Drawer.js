import react, { useState } from 'react'
import { motion } from 'framer-motion'
function Drawer(props) {
    let data = props.drinks;
    console.log(data)

    const [search, setSearchItem] = useState("")


    function onSearchChange(event) {
        setSearchItem(event.target.value)


    }
    if (search.length > 0) {
        data = data.filter((i) => {


            return i.name.toLowerCase().match(search)


        })
    }
    return (
        <div className='drawer'>
            <motion.img class="logo" src="https://www.pngall.com/wp-content/uploads/8/Magnifying-Glass-Search-PNG-Transparent-HD-Photo.png" />
            <input class="search" value={search} onChange={onSearchChange} placeholder="Search drinks.." />
            <div className="itemParent">
                {
                    data.map((drink, index) => {
                        return (

                            <div className="itemList" key={index} onClick={() => props.onDrrinkClick(index)}>
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