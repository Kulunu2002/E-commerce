import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/Cart.css'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Cart from '../Components/Cart';
import Fade from 'react-reveal/Fade';
import CheckOutProcess from '../Components/CheckOutProcess';
import Breadcrumbs from '../Components/Breadcrumbs ';


export default function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('jwt') // get jwt token from browser storage

        const headers = { 'Authorization': `Bearer ${token}` }
        const url = 'http://localhost:5000/fashionHub/cart/getCart';


        const fetchData = async () => {
            const { data } = await axios.get(url, { headers })
            setCart(data)

        }
        fetchData();
    }, [])


    return (
        <>

            <NavBar />
            <Breadcrumbs />
            <Fade bottom>
                <div className="cart">
                    <div className="cart-title">
                        <h1>CART</h1>
                    </div>
                    <CheckOutProcess />
                    <p id='p'>MY SHOPPING CART</p>
                    <div className="tr">
                        <tr>
                            <th className='main'>PRODUCT</th>
                            <th className='price'>PRICE</th>
                            <th className='quantity'>QUANTITY</th>
                            <th className='subtotal'>SUBTOTAL</th>
                        </tr>
                    </div>
                    {cart.map((e) => (
                        <Cart id={e._id} key={e._id} img={e.cartImg} title={e.cartTitle} price={e.cartPrice} quantity={e.quantity} />
                    ))}
                </div>
                <Footer />
            </Fade>
        </>
    )
}
