import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';


function Home() {

 const[product,setProduct]= useState([])
useEffect(()=>{
  axios.get("http://localhost:5000/api/products/Product") 
  .then(res=>{
    console.log(res.data)
    setProduct(res.data)
  }).catch(e=>{
    console.log(e)
  }) 
} 
,[])        




  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
