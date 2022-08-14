import React, { useState } from "react";
import { useProduct } from "../Context/Product";
import {Link} from 'react-router-dom'
import Filter from './Filter'
import './ProductsList.css'

const ProductsList = () => {
    const { data, despatch, state: { Instock, Fast, byCategory, redio, high, Reage, search } } = useProduct();
    const [value,setValue]=useState("")
    function name() {
        let newArry = data;

        if (Instock) {
            newArry = newArry.filter(item => item.stock)
        }
        if (Fast) {
            newArry = newArry.filter(item => (item.delivery))
        }
        if (byCategory[0] !== undefined) {
            newArry = newArry.filter((prod) => byCategory.includes(prod.brand));
        }
        if (Number(redio) === 4) {
            newArry = newArry.filter(item => item.rating >= 4)
        }
        if (Number(redio) === 3) {
            newArry = newArry.filter(item => item.rating >= 3)
        }
        if (Number(redio) === 2) {
            newArry = newArry.filter(item => item.rating >= 2)
        }
        if (Number(redio) === 1) {
            newArry = newArry.filter(item => item.rating >= 0)
        }
        if (high === 'low') {
            newArry = newArry.sort(function (a, b) { return a.price - b.price })

        }
        if (high === 'high') {
            newArry = newArry.sort(function (a, b) { return b.price - a.price })

        }
        if (Reage) {
            newArry = newArry.filter(item => item.price <= Reage)
        }
        if (search) {
            newArry = newArry.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        }
        return newArry
    }
    const handaleClick=(item)=>{
        setValue(item?._id)
        despatch({ type: 'Cart', payload: item }) 

    }
    // 

    return (
        <>
            <div className="col-12 d-flex " >
                <Filter />
                <div className="col-10 "><h4 className="m-4">Showing {name().length} of 22 products</h4>{name().map(item => (
                    
                    <div className="card mb-4" key={item._id}>
                        <div className="row g-0">
                            <div className="col-4 img-center">
                                <img src={item.imgURL} className="img-fluid rounded-start w-50 m-4 " alt="none" />
                            </div>
                            <div className="col-8">
                                <div className="d-flex">
                                    <div className="card-body ">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p>{item.rating} <img src="../img/golden.png" className="img-fluid golden" alt="none"></img> 65 Ratings & 472 Reviews </p>
                                        <ul>
                                            <li>{item.mpixel}</li>
                                            <li>{item.zoom}</li>
                                            <li>{item.display_size}</li>
                                            <li>{item.stock ? 'Instok' : 'Out Of Stock'}</li>
                                            <li>Brand {item.brand}</li>
                                        </ul>
                                        {value===item._id? <Link to='Cart'><button className="btn btn-outline-success" type="button">Go to cart</button></Link>:<button onClick={()=>{handaleClick(item)}} type="button" key={item._id} className="btn btn-outline-primary" >Add To Cart</button> }

                                        
                                    </div>
                                    <div className="m-3">
                                        <h3>{item.offPrice}</h3>
                                        <p className="fs-5 text-decoration-line-through">{item.price}</p>
                                        <p>5% off</p>
                                        <p className="fs-4">{item.delivery ? 'FastDelivary' : 'Free delivery'}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>))}</div>


            </div>
        </>
    )
}
export default ProductsList;