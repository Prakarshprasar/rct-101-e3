import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
import style from "./Navbar.module.css"

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,logout}=useContext(AuthContext)
  const [carr, setcarr] = useState([])
  useEffect(() => {
    const getCData=async()=>{
      let r =await axios.get("http://localhost:8080/cartItems")
      setcarr(r.data)
      console.log(carr)
    }
    getCData()
    
  }, [])
  return (
    <div data-cy="navbar" className={style.navbar}>
      
      <Link data-cy="navbar-home-link" to="/home">Home</Link>
      <div className={style.subnav}>
      <span data-cy="navbar-cart-items-count">Cart: {isAuth?carr.length:1}</span>
      <button data-cy="navbar-login-logout-button" onClick={logout}>{isAuth?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
