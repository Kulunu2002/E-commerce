import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../Components/Filter'
import '../Styles/AllClothing.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'
import Fade from 'react-reveal/Fade';
import Breadcrumbs from '../Components/Breadcrumbs '


export default function Mens() {
  const limit = 6;
  const category = "Mens"
  const [product, setProduct] = useState([]);


  useEffect(() => {
    //using API query parameters for database filtering and get limited data

    const url = `http://localhost:5000/fashionHub/admin/adminGet?category=${category}&limit=${limit}`;

    const fetchData = async () => {
      try {
        const { data } = await axios.get(url)
        setProduct(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData();

  }, [limit, category])

  return (
    <>
      <NavBar />
<Breadcrumbs/>
      <Fade bottom>
        <div className="allClothing">
          <Filter />
          <div className="cloths">
            {product.map((e) => (
              <ProductCard id={e._id} key={e._id} mainImg={e.mainImg} mainTitle={e.mainTitle} addPrice={e.addPrice} />
            ))};
          </div>
        </div>
        <div className="btn">
        <a href="#" class="previous round">&#8249;</a>
        <a href="#" class="next round">&#8250;</a>
        </div>
        <Footer />
      </Fade>
    </>
  )
}
