import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { useProduct } from "../Context/Product";
import '../componets/ProductsList.css'



const Cart=()=>{
    let {state:{cart},despatch}=useProduct()
    const [qtit,setqtit]=useState(1)
    // const [value1,setValue1]=useState("")

        // const [value,setValue]=useState("")
        const like=(item)=>{
            // setValue1(item?._id)
            despatch({type:'like',payload:item})
        }
    
       
return (

<div className="card  " >
<h4  style={{margin:'5rem'}}> {cart.length} products</h4>        
{cart.map(item=>(
                       <div className="card mb-4 mt-4 container" key={item._id}>
                        <div className="row g-0">
                            <div className="col-4  img-center d-flex flex-column">
                                <img src={item.imgURL} className="img-fluid rounded-start w-50 m-4 " alt="none" />
                                <div className="d-flex text-center align-items-center gap-3 mb-4">
                                <img src='../img/Minus-595b40b75ba036ed117d8119.svg' className="img-fluid rounded-start img-min btn" onClick={()=>(setqtit(qtit-1))} alt="none" />
                                <div>{qtit}</div>

                                <img src='../img/172525_plus_icon.svg' className="img-fluid rounded-start img-min btn" onClick={()=>(setqtit(qtit+1))} alt="none" />
                                </div>
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
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-outline-primary" onClick={()=>{like(item)}}>Add to Wishlist</button>
                                        <Link to='/'><button  type="button" className="btn btn-outline-success
                                        " >Go to back</button></Link>
                                        <button  type="button" onClick={()=> despatch({type:"REMOVE_FROM_CART",payload:item})} className="btn btn-outline-danger" >Remove</button>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <h3>{item.offPrice**qtit}</h3>
                                        <p className="fs-5 text-decoration-line-through">{item.price}</p>
                                        <p>5% off</p>
                                        <p className="fs-4">{item.delivery ? 'FastDelivary' : 'Free delivery'}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                     ))}
</div>

)}

export default Cart;