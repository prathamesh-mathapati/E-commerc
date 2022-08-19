// import react from "react";
import React, {useState} from "react";
import { useProduct } from "../Context/Product";
import { Link } from "react-router-dom";

const Favorite=()=>{
    const {state:{Like},despatch}=useProduct()
            const [value,setValue]=useState("")

    const handaleClick=(item)=>{
        setValue(item?._id)
        despatch({ type: 'Cart', payload: item }) 
    }
    return (
<div className="card mb-3" >
<h4 className="m-4" > {Like.length} products</h4>        
{Like.map(item=>(
                       <div className="card mb-4 mt-4 container" key={item._id}>
                        <div className="row g-0">
                            <div className="col-4  img-center d-flex flex-column">
                                <img src={item.imgURL} className="img-fluid rounded-start w-50 m-4 " alt="none" />
                                <div className="d-flex text-center align-items-center gap-3 mb-4">
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
                                        {value===item._id? <Link to='/Cart'><button className="btn btn-outline-success" type="button">Go to cart</button></Link>:<button onClick={()=>{handaleClick(item)}} type="button" key={item._id} className="btn btn-outline-primary" >Add To Cart</button> }

                                        <Link to='/'><button  type="button" className="btn btn-outline-success
                                        " >Go to back</button></Link>
                                        <button  type="button" onClick={()=> despatch({type:"REMOVE_FROM_LIKE",payload:item})} className="btn btn-outline-danger" ><img src="../img/delete-forever.png" className="img-fluid" alt="none"></img></button>
                                        </div>
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
                    </div>
                     ))}
</div>
    )
    }

export default Favorite;