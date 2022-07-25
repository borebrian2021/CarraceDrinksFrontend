import react ,{useState,useEffect} from 'react'

function NavBar(){
    return (
        <div className="nav-bar">
<div className="leftSide"><img class="logo" src="./images/carraceLogo.png"/><small class="logoText">Carrace Drinks</small>  </div>
<div className="rightSide"><input class="search" placeholder="search.."/></div>

</div>
    )
}



export default NavBar