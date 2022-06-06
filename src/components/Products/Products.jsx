import React, { useEffect, useState } from "react";
import axios from "axios"
import style from "./Products.module.css"

const Products = () => {
  const [arr, setarr] = useState([])
  useEffect(() => {
    const getData=async()=>{
      let r =await axios.get("http://localhost:8080/products")
      setarr(r.data)
      console.log(arr)
    }
    getData()
    
  }, [])
  
  return <div >
    Products Page
    <div className={style.products}>
      {arr.map((elem)=>(
        <div key={elem.id}>
          <p>{elem.name}</p>
          <p>{elem.description}</p>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
    </div>;
};

export default Products;
