import React from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {
 
    const {currentUser} = useSelector(state => state.userLoginReducer) ;
    // console.log(currentUser)
    return (
        <div >
           <nav className=" shadow   rounded navbar fixed-top navbar-white " style={{height:"60px", backgroundColor:'#001333', color:'white'}}>
            <div className="container-fluid">
               {/* <img src="https://nitdgp.ac.in/front/assets/images/logo.png" alt="logo" /> */}
                <a  className="navbar-brand" href="/dashboard" 
                style={{fontFamily:"oswald",fontSize:"30px",marginTop:"-4px" ,color:'white'}}>NIT Durgapur | Library</a>
                <p style={{textAlign:"center",marginRight:"10%",fontFamily:"sans-serif",fontSize:"24px"}}>
                <i className="far fa-user "></i> { " "}{ currentUser && currentUser.user.name.split(" ")[0]}</p>
            </div>
        
          
          
            </nav> 
        </div>
    );
};

export default Navbar;