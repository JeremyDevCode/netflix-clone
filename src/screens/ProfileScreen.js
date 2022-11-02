import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from './PlansScreen';
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser);


  return (
    <div className="profileScreen">
        <Nav/>
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="https://occ-0-1631-3933.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX5_zNxCZOEGlSGykILrWVH75fVZe_-5H9HlAXtJoNs6AK8FTjyMG-llwgLJXGA8RUwxotwOOHMh3ovdrXFpq9-J4CBmFKA.png?r=1d4" alt="" />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plants (Inactive for now)</h3>
                        <PlansScreen/>

                        <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen