//One Item view page

import React, { useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios'
import '../Styles/Product.css'
import Select from 'react-select'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Benefit from '../Components/Benefit';
import Breadcrumbs from '../Components/Breadcrumbs ';

export default function Product(props) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("ProductID");

    const options = [
        { value: '10', label: '10' },
        { value: '12', label: '12' },
        { value: '16', label: '16' },
        { value: '18', label: '18' },
        { value: '20', label: '20' }
    ]
    const [showSelect, setShowSelect] = useState(options[0]);
    const history = useHistory()

    function selectOne(e) {
        setShowSelect(e)
    }
    function countCal() {
        setQuantity(
            quantity = quantity + 1
        )
    }
    function countRemove() {
        setQuantity(
            quantity = quantity - 1
        )
    }
    function changeImg(e) {
        let mainImage = document.getElementById("imageBox")
        mainImage.src = e.target.src
    }

    //get product from database
    const [item, setItem] = useState([]);

    const url = `http://localhost:5000/fashionHub/admin/getProduct/${id}`;

    useEffect(() => {
        const fetchData = async () => {
            const product = await axios.get(url)
            setItem(product.data)
            console.log('Items>>>', product)

        }
        fetchData()
    }, [])

    //Add product to cart
    const cartImg = item.mainImg
    const cartTitle = item.mainTitle
    const cartPrice = item.addPrice
    let [quantity, setQuantity] = useState(0)

    const addCart = async (event) => {
        event.preventDefault();
        let token = localStorage.getItem('jwt')

        const url = 'http://localhost:5000/fashionHub/cart/addCart';
        const headers = { 'Authorization': `Bearer ${token}` }
        try {
            const submitData = {
                cartImg: cartImg,
                cartTitle: cartTitle,
                cartPrice: cartPrice,
                quantity: quantity
            }
            const response = await axios.post(url, submitData, { headers })

            if (response.status === 201) {
                alert("Product Added")
            }

        } catch (error) {
            console.log(error)
        }

    }
    //When Buy product , redirect to checkout page
    const checkoutData = {
        price: item.price,
        title: item.title

    }
    const handleCheckout = () => {

        history.push({
            pathname: '/checkout',
            state: checkoutData
        })
    }




    return (
        <>
            <NavBar />
            <Breadcrumbs/>
            <Fade bottom>
                <Benefit />
                <div className="product">
                    <form onSubmit={addCart}>
                        <div className="productImages">
                            <div className="p-sub-img">
                                <img src={item.subImg1} alt="" onClick={changeImg} />
                                <img src={item.subImg2} alt="" onClick={changeImg} />
                            </div>
                            <div className="p-main-img">
                                <img src={item.mainImg} alt="linen" id='imageBox' />
                            </div>
                        </div>
                        <div className="productDetails">
                            <h1>{item.mainTitle}</h1>
                            <p id='price'>{item.addPrice}</p>
                            <p>{item.description}</p>
                            <p id='opacity'>*Product image may differ to actual due to photographic lighting*</p>
                            <div className="brand">
                                <p>Brand:</p>
                                <img src={item.addBrand} alt="Daisy Street" />
                            </div>
                            <p><span>Material : </span>{item.addMaterial}</p>
                            <p><span>Weight : </span>{item.addWeight}</p>
                            <div className="offer">
                                <p>or 3 installments of {item.addPrice} with</p>
                                <img src="../Images/pay.png" alt="int Pay" />
                            </div>
                            <div className="size">
                                <p>Size</p>
                                <Select options={options} onChange={selectOne} value={showSelect} />
                            </div>
                            <div className="addProduct">
                                <div className="add-btn">
                                    <p id='pieces'>{quantity}</p>
                                    <p onClick={countCal}><i class="bi bi-plus"></i></p>
                                    <p onClick={countRemove}><i class="bi bi-dash"></i></p>
                                </div>
                                <div className="btn">
                                    <button onClick={handleCheckout}>BUY</button>
                                    <button type='submit'>Add Cart</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </Fade>
        </>
    )
}
