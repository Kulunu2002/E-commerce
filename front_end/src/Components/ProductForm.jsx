// Add product for admin

import React,{useState} from 'react'
import axios from 'axios';
import '../Styles/Admin.css'

export default function ProductForm() {
    const [mainImg, setMainImg] = useState('')
    const [subImg1, setSubImg1] = useState('')
    const [subImg2, setSubImg2] = useState('')
    const [addPrice, setAddPrice] = useState('')
    const [mainTitle, setMainTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addBrand, setAddBrand] = useState('')
    const [addMaterial, setAddMaterial] = useState('')
    const [addWeight, setAddWeight] = useState('')
    const [category, setCategory] = useState('')

    const handelSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:5000/fashionHub/admin/adminPost';
        try {
            const submitData = {
                mainImg: mainImg,
                subImg1: subImg1,
                subImg2: subImg2,
                addPrice: addPrice,
                mainTitle: mainTitle,
                description: description,
                addBrand: addBrand,
                addMaterial: addMaterial,
                addWeight: addWeight,
                category:category

            }
            const response = await axios.post(url, submitData);
            console.log(response)

            if (response.status === 201) {
                alert("Product Added")  //If the product is saved in the database, show alert for admin
                window.location.reload()
            }

        } catch (error) {
            console.log(error)
            throw new Error(alert("Product add failed!"))
        }
    }
    return (
        <>
            <div className="clothe-form">
                <form className='admin-form' onSubmit={handelSubmit}>
                    <div className="add-img">
                        <input
                            type="text"
                            placeholder='Main Image'
                            value={mainImg}
                            onChange={(e) => {
                                setMainImg(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            value={subImg1}
                            onChange={(e) => {
                                setSubImg1(e.target.value)
                            }}
                        />
                        <input
                            type="text"
                            value={subImg2}
                            onChange={(e) => {
                                setSubImg2(e.target.value)
                            }}
                        />
                    </div>
                    <div className="add-price">
                        <input
                            type="text"
                            value={addPrice}
                            onChange={(e) => {
                                setAddPrice(e.target.value)
                            }}
                            placeholder='Price' />
                    </div>
                    <div className="add-description">
                        <input
                            type="text"
                            value={mainTitle}
                            onChange={(e) => {
                                setMainTitle(e.target.value)
                            }}
                            placeholder='Main Title' />
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            placeholder='Description' />
                    </div>
                    <div className="add-brand">
                        <input
                            type="text"
                            value={addBrand}
                            onChange={(e) => {
                                setAddBrand(e.target.value)
                            }}
                            placeholder='Logo' />
                    </div>
                    <input
                        type="text"
                        value={addMaterial}
                        onChange={(e) => {
                            setAddMaterial(e.target.value)
                        }}
                        placeholder='Material' />
                    <input
                        type="text"
                        value={addWeight}
                        onChange={(e) => {
                            setAddWeight(e.target.value)
                        }}
                        placeholder='Wight' />
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                        placeholder='Category' />
                    <div className="btn">
                        <button type='submit'>ADD</button>
                    </div>
                </form>
            </div>
        </>
    )
}

