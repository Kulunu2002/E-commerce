import React from 'react'
import '../Styles/CheckOutProcess.css'

export default function CheckOutProcess(props) {

    const pathname = window.location.pathname;

    
    const activeStyle = {     
            background:"#e10a1d",
            // background: "#000000",
            borderRadius: "50%",
            cursor: 'default' ,
    }
     const notActiveStyle = {
        cursor: 'pointer'
    }

    return (
        <>
            <div className="process">
                <div className="process-step">
                    <div className="process-img">
                        <img src="../Images/Process/p-1.png" alt="cart" id='cart' style={pathname ==='/Cart' || pathname==='/checkout' ? activeStyle : notActiveStyle }/>
                    </div>
                    <p>CART</p>
                </div>
                <div className="line"></div>
                <div className="process-step">
                    <div className="process-img">
                        <img src="../Images/Process/p-2.png" alt="cart" style={pathname==='/checkout' ? activeStyle : notActiveStyle} />
                    </div>
                    <p>CHECKOUT</p>
                </div>
                <div className="line"></div>
                <div className="process-step">
                    <div className="process-img">
                        <img src="../Images/Process/p-3.png" alt="cart" />
                    </div>
                    <p>PAYMENT</p>
                </div>
            </div>
        </>
    )
}
