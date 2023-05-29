import React, { useState, useEffect } from 'react'
import '../Styles/Home.css'
import axios from 'axios';
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard';
import Fade from 'react-reveal/Fade';
import Benefit from '../Components/Benefit';


export default function HomePage() {

    const heroImg = ["../Images/hero-6.jpg", "../Images/hero-3.jpg", "../Images/hero-4.jpg", "../Images/hero-5.jpg"]
    const [curr, setCurr] = useState(0);
    const [slide, setSlide] = useState(heroImg[curr]);

    const category = "NewArrivals"
    const limit = 8
    const [item, setItem] = useState([]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            let newCurr = curr + 1;
            if (newCurr > 3) {
                newCurr = 0;
            }
            setCurr(newCurr);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [curr]);

    useEffect(() => {
        setSlide(heroImg[curr]);
    }, [curr]);

    useEffect(() => {
        const url = `http://localhost:5000/fashionHub/admin/adminGet?category=${category}&limit=${limit}`; //using API query parameters for database filtering and get limited data

        const fetchData = async () => {
            try {
                const { data } = await axios.get(url)
                setItem(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();


    }, [])

    return (
        <>
            <NavBar />
            {/* Benefits */}

            <Benefit />

            {/* Hero Section */}
            <div className="hero">
                <div className="heroImg">
                    <img src={slide} alt="" />
                </div>
            </div>

            {/* Services */}

            <div className="services">
                <div className="service">
                    <div className="serviceImg">
                        <img src="../Images/delivery.png" alt="delivery" />
                    </div>
                    <div className="serviceInfo">
                        <p>ISLAND-WIDE<br />DELIVERY </p>
                    </div>
                </div>
                <div className="service">
                    <div className="serviceImg">
                        <img src="../Images/money.png" alt="money" />
                    </div>
                    <div className="serviceInfo">
                        <p>CASH ON<br />DELIVERY </p>
                    </div>
                </div>
                <div className="service">
                    <div className="serviceImg">
                        <img src="../Images/shop.png" alt="" />
                    </div>
                    <div className="serviceInfo">
                        <p>ISLAND-WIDE<br />STORE</p>
                    </div>
                </div>
                <div className="service">
                    <div className="serviceImg">
                        <img src="../Images/exchange.png" alt="" />
                    </div>
                    <div className="serviceInfo">
                        <p>EXCHANGE FROM<br />ANY STORE</p>
                    </div>
                </div>
                <div className="service">
                    <div className="serviceImg">
                        <img src="../Images/card.png" alt="" />
                    </div>
                    <div className="serviceInfo">
                        <p>SECURE<br />PAYMENTS</p>
                    </div>
                </div>
                <div className="service">
                    <div className="serviceImg">
                        <img src="/..Images/dress.png" alt="" />
                    </div>
                    <div className="serviceInfo">
                        <p>UNLIMITED<br />UNIQUE DESIGN</p>
                    </div>
                </div>
            </div>

            {/* Main Category */}
            <Fade bottom>
                <div className="main-Cate">
                    <div className="cate">
                        <div className="cateImg">
                            <img src="../Images/cate-1.jpg" alt="men" />
                        </div>
                        <div className="cateInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="cate">
                        <div className="cateImg">
                            <img src="../Images/cate-2.jpg" alt="men" />
                        </div>
                        <div className="cateInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="cate">
                        <div className="cateImg">
                            <img src="../Images/cate-3.jpg" alt="men" />
                        </div>
                        <div className="cateInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                </div>
            </Fade>

            {/* NEW ARRIVALS */}
            <Fade bottom>
                <div className="newArrivals">
                    <div className="sub-headers">
                        <h1>NEW ARRIVALS</h1>
                        <p>Bring an edge back into your wardrobe with cool looks you can't do without from Fashion Bug, the best place for online clothes shopping.</p>
                    </div>

                    <div className="newA-grid">
                        {item.map((e) => (
                            <ProductCard id={e._id} key={e._id} mainImg={e.mainImg} mainTitle={e.mainTitle} addPrice={e.addPrice} />
                        ))};
                    </div>
                    <button className='collection'>VIEW COLLECTION</button>
                </div>
            </Fade>

            <Fade bottom>
                <div className="banner">
                    <img src="../Images/banner.jpg" alt="" />
                </div>
            </Fade>

            <Fade bottom>
                <div className="sub-headers">
                    <h1>SHOP BY CATEGORY</h1>
                </div>
            </Fade>

            <Fade bottom>
                <div className="sub-cate">
                    <div className="cate">
                        <div className="cateImg sub-img img" >
                            <img src="../Images/sub-1.jpg" alt="men" />
                        </div>
                        <div className=" subInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="cate">
                        <div className="cateImg sub-img">
                            <img src="../Images/sub-2.jpg" alt="men" />
                        </div>
                        <div className=" subInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="cate">
                        <div className="cateImg sub-img">
                            <img src="../Images/sub-3.jpg" alt="men" />
                        </div>
                        <div className=" subInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="cate">
                        <div className="cateImg sub-img" >
                            <img src="../Images/sub-4.jpg" alt="men" />
                        </div>
                        <div className="  subInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="cate">
                        <div className="cateImg sub-img">
                            <img src="../Images/sub-5.jpg" alt="men" />
                        </div>
                        <div className=" subInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                    <div className="cate">
                        <div className="cateImg sub-img img">
                            <img src="../Images/sub-6.jpg" alt="men" />
                        </div>
                        <div className=" subInfo">
                            <h1>MEN'S</h1>
                            <a href="">VIEW COLLECTION</a>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade bottom>
                <Footer />
            </Fade>

        </>
    )
}
