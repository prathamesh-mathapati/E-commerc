import React from "react";
import { useProduct } from "../Context/Product";

const Filter = () => {
    const { despatch,state:{Reage} } = useProduct()
    return (
        <div className="col-2 container">
            <h5 className="m-1">Filter</h5>
            <hr />

            <label htmfor="disabledRange" className="form-label">Price

            </label>
            <h3>{Reage}</h3>
            <input type="range" className="form-range" min="0" max="183690" onChange={(e)=>{despatch({type:'range',payload:e.target.value})}} id="customRange2" />
            <div className="d-flex flex-column ">
                <h5>Availability</h5>
                <label> <input className="mx-1" type={'checkbox'} value='InStock' onClick={() => { despatch({ type: "Instock" }) }}></input>InStock </label>
                <label> <input className="mx-1" type={'checkbox'} value='Fast' onClick={() => { despatch({ type: "Fast" }) }}></input>Fast delivery </label>
                <hr />
            </div>
            <div className="d-flex flex-column ">
                <h5>Category</h5>
                <label > <input className="mx-1" type={'checkbox'} value='Nikon' onClick={() => { despatch({ type: "CATEGORY", payload: 'NIKON' }) }} ></input>Nikon </label>
                <label > <input className="mx-1" type={'checkbox'} value='CANON' onClick={() => { despatch({ type: "CATEGORY", payload: 'CANON' }) }} ></input>CANON </label>
                <label > <input className="mx-1" type={'checkbox'} value='PANASONIC' onClick={() => { despatch({ type: "CATEGORY", payload: 'PANASONIC' }) }} ></input>PANASONIC </label>
                <label > <input className="mx-1" type={'checkbox'} value='SONY' onClick={() => { despatch({ type: "CATEGORY", payload: 'SONY' }) }} ></input>SONY </label>
                <label > <input className="mx-1" type={'checkbox'} value='SAMSUNG' onClick={() => { despatch({ type: "CATEGORY", payload: 'SAMSUNG' }) }} ></input>SAMSUNG </label>
                <hr />
            </div>

            <div className="d-flex flex-column ">
                <h5>Ratings</h5>
                {['4', '3', '2', '1'].map(item => (
                    <label key={item}> <input className="mx-1" type={'radio'} value={item} name="radio" onClick={() => { despatch({ type: "redio", payload: item }) }}></input>{item} Stars & above </label>
                ))}
                <hr />
            </div>
            <div className="d-flex flex-column ">
                <h5>Sort by</h5>
                <label> <input className="mx-1" type={'radio'} value='High1' name="radio" onClick={()=>{despatch({type:'high',payload:'high'})}}></input>Price-Low to High </label>
                <label> <input className="mx-1" type={'radio'} value='low1' name="radio" onClick={()=>{despatch({type:'high',payload:'low'})}}></input>Price-High to low  </label>
                <hr />
            </div>
        </div>

    )
}

export default Filter;