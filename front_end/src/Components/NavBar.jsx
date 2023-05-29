import React from 'react'
import axios from 'axios';
import '../Styles/NavBar.css'
import { useState, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs ';


export default function NavBar() {
    const [showList, setShowList] = useState(false)
    const [showWomenList, setShowWomenList] = useState(false)
    const [showKidsList, setShowKidsList] = useState(false)
    const [image, setImage] = useState("https://d1hj68zhrbkzii.cloudfront.net/wp-content/uploads/2022/05/225x340px-Gents-12-min.jpg")
    const [count, setCount] = useState()
    const history = useHistory()


    function images(e) {
        if (e.target.id === "id") {
            setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_w6jSIUGkQio90mtjwOw5LN87DYfbLkRPpEjth3vgFoE9VRaV")
        } else {

        }
    }

    useEffect(() => {
        setImage("https://d1hj68zhrbkzii.cloudfront.net/wp-content/uploads/2022/05/225x340px-Gents-12-min.jpg")
    }, [])


    useEffect(() => {
        let token = localStorage.getItem('jwt') // get jwt token from browser storage

        const headers = { 'Authorization': `Bearer ${token}` }
        const url = 'http://localhost:5000/fashionHub/cart/getCart';


        const fetchData = async () => {
            const { data } = await axios.get(url, { headers })
            setCount(data.length)
        }

        fetchData()

    }, [])


    return (
        <>
            <div className="navbar">
                <div className="navbar1">
                    <div className="logo">
                        <img src="../Images/logo-0.png" alt="" />
                    </div>
                    <div className="navItem">
                        <div className="search">
                            <input type="text" placeholder='Search product...' />
                            <a href=""><i class="bi bi-search"></i></a>
                        </div>
                        <div className="sign-login">
                            <p><a href="">My Account</a></p>
                        </div>
                        <div className="navIcon">
                            <a href=""><i class="bi bi-heart-fill"></i></a>
                            <div className="cart-icon">
                                <Link to='/Cart'><a href=""><i class="bi bi-cart-fill"></i></a></Link>
                                <p>{count} Item</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar2">
                    <div className="navItem2">
                        <div className="category">
                            <p>Sale</p>
                        </div>

                        {/* Men Section */}

                        <div className="category" id='categoryInfo' onMouseEnter={() => {
                            setShowList(true);
                        }}
                            onMouseLeave={() => {
                                setShowList(false)
                            }}>

                            <p>Men <i class="bi bi-chevron-right"></i></p>

                            {showList &&
                                <div className="categoryInfo" >
                                    <div className="categoryImg">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="categoryList">
                                        <div className="categoryList1">
                                            <p>CLOTHING</p>
                                            <ul>
                                                <li>
                                                    <Link to='/mens'>
                                                        <a href="">All Clothing</a>
                                                    </Link>
                                                </li>
                                                <li id='id' onMouseMove={images}>
                                                    <a href="">T-shirts & Polos</a>
                                                </li>
                                                <li><a href="">Hoodies</a></li>
                                                <li><a href="">Casual Pants</a></li>
                                                <li><a href="">Shorts</a></li>
                                                <li><a href="">Sportswear</a></li>
                                                <li><a href="">Formal Trousers</a></li>
                                            </ul>
                                        </div>
                                        <div className="categoryList1">
                                            <p>ACCESSORIES</p>
                                            <ul>
                                                <li><a href="">All Accessories</a></li>
                                                <li><a href="">Footwear</a></li>
                                                <li><a href="">Hats & Caps</a></li>
                                            </ul>
                                        </div>
                                        <div className="categoryList1">
                                            <p>INNERWEAR</p>
                                            <ul>
                                                <li><a href="">All Innerwear</a></li>
                                                <li><a href="">Boxers & Briefs</a></li>
                                                <li><a href="">Socks</a></li>
                                                <li><a href="">Undershirts</a></li>
                                            </ul>
                                        </div>
                                        <div className="categoryList1">
                                            <p>ETHNICWEAR</p>
                                            <ul>
                                                <li><a href="">All Ethnicwear</a></li>
                                                <li><a href="">Sarong</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        {/* Women Section */}

                        <div className="category"
                            onMouseEnter={() => {
                                setShowWomenList(true);
                            }}
                            onMouseLeave={() => {
                                setShowWomenList(false)
                            }}>
                            <p>Women<i class="bi bi-chevron-right"></i></p>
                            {showWomenList && <div className="categoryInfo">
                                <div className="categoryImg">
                                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTK6zGAS_Soe_e0Bx4SHH_QCEBFKnJBMptVxYv7Stn1j3NDyw3L" alt="" />
                                </div>
                                <div className="categoryList">
                                    <div className="categoryList1">
                                        <p>CLOTHING</p>
                                        <ul>
                                            <li>
                                                <Link to='/womens'>
                                                    <a href="">All Clothing</a>
                                                </Link>
                                            </li>
                                            <li><a href="">Dresses</a></li>
                                            <li><a href="">Long Tops</a></li>
                                            <li><a href="">Crop Tops & T-shirts</a></li>
                                            <li><a href="">Blouses & Shirts</a></li>
                                            <li><a href="">Ladies Pants</a></li>
                                            <li><a href="">Jeans</a></li>
                                            <li><a href="">Shorts</a></li>
                                            <li><a href="">Jumpsuit</a></li>
                                            <li><a href="">Skirt</a></li>
                                        </ul>
                                    </div>
                                    <div className="categoryList1">
                                        <p>ACCESSORIES</p>
                                        <ul>
                                            <li><a href="">All Accessories</a></li>
                                            <li><a href="">Hand Bags & Wallets</a></li>
                                            <li><a href="">Scarfs & Shawls</a></li>
                                        </ul>
                                    </div>
                                    <div className="categoryList1">
                                        <p>COSMETICS</p>
                                        <ul>
                                            <li><a href="">Footwear</a></li>
                                            <li><a href="">Watches</a></li>
                                            <li><a href="">Perfume</a></li>
                                        </ul>
                                    </div>
                                    <div className="categoryList1">
                                        <p>ETHNIC WEAR</p>
                                        <ul>
                                            <li><a href="">All Ethnicwear</a></li>
                                            <li><a href="">Saree</a></li>
                                            <li><a href="">Kurthis</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>}
                        </div>

                        {/* Kids Section */}

                        <div className="category"
                            onMouseEnter={() => {
                                setShowKidsList(true);
                            }}
                            onMouseLeave={() => {
                                setShowKidsList(false)
                            }}>
                            <p> Kids & Baby<i class="bi bi-chevron-right"></i></p>
                            {showKidsList &&
                                <div className="categoryInfo">
                                    <div className="categoryImg">
                                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJHR6k0xwCbuX8-bWNg9TZTBY2yHmx2C-7Goq_B_-XRkU4anm_" alt="" />
                                    </div>
                                    <div className="categoryList">
                                        <div className="categoryList1">
                                            <p>BOYS (2-16 YEARS)</p>
                                            <ul>
                                                <li><a href="">All Boys (2-16 years)</a></li>
                                                <li><a href="">Shirt</a></li>
                                                <li><a href="">T-shirt</a></li>
                                                <li><a href="">Pant</a></li>
                                                <li><a href="">Short</a></li>
                                            </ul>
                                        </div>
                                        <div className="categoryList1">
                                            <p>GIRLS (2-16 YEARS)</p>
                                            <ul>
                                                <li><a href="">All Girls (2-16 years)</a></li>
                                                <li><a href="">T-Shirt</a></li>
                                                <li><a href="">Dresses</a></li>
                                                <li><a href="">Jumpsuits & Rompers</a></li>
                                            </ul>
                                        </div>
                                        <div className="categoryList1">
                                            <p>KIDS & BABY ACCESSORIES</p>
                                            <ul>
                                                <li><a href="">Footwear</a></li>
                                            </ul>
                                        </div>
                                        <div className="categoryList1">
                                            <p>TOYS & GAMES</p>
                                            <ul>
                                                <li><a href="">Hot Wheels</a></li>
                                                <li><a href="">Other Toys</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                        <div className="category">
                           <p style={{Color:'red'}}><Link to='/NewArrivals'>New Arrivals</Link></p>
                        </div>
                    </div>
                    <div className="helps">
                        <p>Need Help?</p>
                        <a href=""><i class="bi bi-telephone-fill"></i></a>
                        <a href=""><i class="bi bi-envelope-fill"></i></a>
                    </div>
                </div>
                <Breadcrumbs />

            </div >
        </>
    )
}
