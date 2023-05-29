// Clothe Filter Process

import React,{ useState } from 'react'
import '../Styles/AllClothing.css'
import Select from 'react-select'

export default function Filter() {
    const options = [
        { value: 'select all', label: 'select all' },
        { value: 'Cotton', label: 'Cotton' },
        { value: 'Linen', label: 'Linen' },
        { value: 'Cotton Rich', label: 'Cotton Rich' },
        { value: 'Pique', label: 'Pique' },
        { value: 'Jersey', label: 'Jersey' }
    ]
    const [showSelect, setShowSelect] = useState(options[0]);
    const [showList, setShowList] = useState(false)

    function selectOne(e) {
        setShowSelect(e)
    }

    function viewList(e) {
        if (showList === false) {
            e.target.class = "bi bi-caret-down-fill"
            setShowList(true)

        } else {
            setShowList(false)
        }
    }
    return (
        <>
            <div className="filter">
                <p id='shop'>SHOP BY</p>
                <div className="all-cate">
                    <div className="all-cate-tittle">
                        <p>All Clothing</p>
                        <i class="bi bi-caret-right-fill" onClick={viewList} id='viewIcon'></i>
                    </div>
                    {showList && <div className="all-cate-list">
                        <p>Casual Shirts</p>
                        <p>Shoes</p>
                        <p>Formal Shirt</p>
                        <p>Hoodies</p>
                        <p>Short's</p>
                        <p>T-shirts & Polos</p>
                        <p>Plus Men Wear</p>
                    </div>}
                </div>
                <div className="all-size">
                    <p id='size'>Size</p>
                    <div className="sizes-btn">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                        <p>2XL</p>
                        <p>XXL</p>
                        <p>3XL</p>
                        <p>4XL</p>
                        <p>40</p>
                        <p>40</p>
                    </div>
                </div>
                <div className="all-materials">
                    <p id='material'>Materials</p>
                    <Select options={options} value={showSelect} onChange={selectOne} />
                </div>
                <div className="priceRange">
                    <p id='price'>Price</p>
                    <p>RS :
                        <input type="text" />-
                        <input type="text" />
                    </p>
                </div>
                <div className="brands">
                    <p id='brand'>Brands</p>
                    <div className="brand-logo">
                        <img src="../Images/brands/brand-1.jpg" alt="" />
                        <img src="../Images/brands/brand-2.png" alt="" />
                        <img src="../Images/brands/brand-3.jpg" alt="" />
                        <img src="../Images/brands/brand-4.png" alt="" />
                        <img src="../Images/brands/brand-5.jpg" alt="" />
                        <img src="../Images/brands/brand-6.jpg" alt="" />
                    </div>
                </div>
                <div className="btn">
                    <button>Filter</button>
                </div>
            </div>
        </>
    )
}
