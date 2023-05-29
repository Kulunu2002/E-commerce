import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/AllClothing.css'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import Filter from '../Components/Filter';


export default function NewArrivals() {
  
  
  const limit = 6;
  const category = "NewArrivals"
  const [product, setProduct] = useState([]);


  
  useEffect(() => {
    const url = `http://localhost:5000/fashionHub/admin/adminGet?category=${category}&limit=${limit}`;

    const fetchData = async () => {
      try {
        const { data } = await axios.get(url)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData();

  }, [limit,category])

  return (
    <>
      <NavBar />
      <div className="allClothing">
        {/* <h1>All Clothing</h1> */}
        <Filter/>
        
        <div className="cloths">
          {product.map((e) => (
            <ProductCard id={e._id} key={e._id} mainImg={e.mainImg} mainTitle={e.mainTitle} addPrice={e.addPrice} />
          ))};

        </div>

      </div>
      <Footer />
    </>
  )
}
