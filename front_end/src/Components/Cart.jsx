import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import '../Styles/Cart.css';
import CheckOut from '../Pages/CheckOut';

export default function Cart(props) {

    const history = useHistory()
    let quantity = props.quantity

    let [count, setCount] = useState(quantity);

    function countCal() {
        count = count + 1
    }

    function countRemove() {
        count = count - 1
    }

    const id = props.id;

    // Remove Item From Cart

    const handleDelete = async (event) => {
        event.preventDefault();

        const url = `http://localhost:5000/fashionHub/cart/deleteCart/${id}`;
        try {
            const response = await axios.delete(url);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    };

    // CheckOut Data passed as State To CheckOut Page
    const checkoutData = {
        price: props.price,
        title: props.title,
        id:props.id

    }
    const handleCheckout = () => {

        history.push({
            pathname: '/checkout',
            state: checkoutData
        })
    }

    return (
        <>
            <div className="Item-Details">
                <table>
                    <tbody>
                        <tr>
                            <td className="main">
                                <div className="Item-img">
                                    <img src={props.img} alt="" />
                                    <p>{props.title}</p>
                                </div>
                            </td>
                            <td className="price">{props.price}</td>
                            <td className="quantity">
                                <div className="add-btn">
                                    <p id="pieces">{quantity}</p>
                                    <p >
                                        <i className="bi bi-plus" onClick={countCal}></i>
                                    </p>
                                    <p onClick={countRemove}>
                                        <i className="bi bi-dash"></i>
                                    </p>
                                </div>
                            </td>
                            <td className="subtotal">
                                <div className="cart-checkOut">
                                    <p>{props.price}</p>
                                    <button onClick={handleCheckout}>CHECKOUT</button>
                                </div>
                                <i className="bi bi-x" onClick={handleDelete}></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
