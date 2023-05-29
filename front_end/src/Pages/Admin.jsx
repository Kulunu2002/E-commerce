// Admin Page

import React from 'react'
import '../Styles/Admin.css'
import { useState } from 'react'
import ProductForm from '../Components/ProductForm';

export default function Admin() {

    const [showForm1, setShowForm1] = useState(false)
    const [showForm2, setShowForm2] = useState(false)
    const [showForm3, setShowForm3] = useState(false)

    return (
        <>
            <div className="admin">
                <div className="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjhER0Xoi1M9dUqQlDblLzIuhlxKMG10B3DTvgQlv1142DmiQJHzeUTGd3B1tunQNXYU&usqp=CAU" alt="" />
                </div>
                <div className="add-clothes">
                    <div className="add-clothe-cate">
                        <img src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/200267201--1--1681962314.jpeg" alt="" />
                        <p>Add Kids Clothes</p>

                        <i class="bi bi-caret-right-fill"
                            onClick={() => {
                                if (showForm1 === false) {
                                    setShowForm1(true)
                                } else {
                                    setShowForm1(false)
                                }
                            }}></i>
                    </div>

                    {showForm1 && <ProductForm />}

                    <div className="add-clothe-cate">
                        <img src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/193616433--1--1668156286.jpeg" alt="" />
                        <p>Add Kids Clothes</p>
                        <i class="bi bi-caret-right-fill" onClick={() => {
                                if (showForm2 === false) {
                                    setShowForm2(true)
                                } else {
                                    setShowForm2(false)
                                }
                            }}></i>
                    </div>
                    {showForm2 && <ProductForm />}

                    <div className="add-clothe-cate">
                        <img src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/199667371--3--1682051267.jpeg" alt="" />
                        <p>Add Kids Clothes</p>
                        <i class="bi bi-caret-right-fill"onClick={() => {
                                if (showForm3 === false) {
                                    setShowForm3(true)
                                } else {
                                    setShowForm3(false)
                                }
                            }}></i>
                    </div>
                    {showForm3 && <ProductForm />}
                </div>
            </div>
        </>
    )

}