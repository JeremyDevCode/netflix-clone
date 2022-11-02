import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);
    const history = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'> 
            <img onClick={() => history("/")} className='nav__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/>
            
            <img onClick={() => history("/profile")} className='nav__avatar'src="https://occ-0-1631-3933.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX5_zNxCZOEGlSGykILrWVH75fVZe_-5H9HlAXtJoNs6AK8FTjyMG-llwgLJXGA8RUwxotwOOHMh3ovdrXFpq9-J4CBmFKA.png?r=1d4" alt="avatar"/>
      
        </div>
    </div>
  )
}

export default Nav