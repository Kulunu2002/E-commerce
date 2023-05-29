import React, { useState } from 'react'
import '../Styles/NewArrivals.css'
import { useHistory } from "react-router-dom";

export default function ProductCard(props) {
    const [showCart, setShowCart] = useState(false);
    const history = useHistory()

    const handelClick = async () => {

        history.push(`/product?ProductID=${props.id}`); //When called handelClick function Navigate to new page with productId as a query parameter in the URL 
    }

    return (
        <>
            <div className="newA-Item">
                <div className="newA-Img"
                    onMouseEnter={() => {
                        setShowCart(true)
                    }}
                    onMouseLeave={() => {
                        setShowCart(false)
                    }}
                    onClick={handelClick}
                >
                    <img src={props.mainImg} alt="" />

                    {
                        showCart && <div className="viewImg">
                            <a href="" className='addCart'>SELECT OPTIONS <span><i class="bi bi-cart-plus"></i></span></a>
                        </div>
                    }
                </div>
                <div className="newA-info">

                    <p>{props.mainTitle}</p>

                    <p id='price'>{props.addPrice}</p>

                    <div className="btn-buy">
                        <button onClick={handelClick}>BUY</button>
                    </div>
                </div>
            </div>
        </>
    )
}