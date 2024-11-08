import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { ordered,restocked } from "./iceCreamSlice";
import { useState } from "react";
import { useRef } from "react";

export const Icecreamview = ()=>{
    const inputRef = useRef();
    const numOfIcecreams=useSelector((state)=>state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    return(<div>
        <h2>Number of Icecreams - {numOfIcecreams}</h2>
        <button onClick={()=>{
            dispatch(ordered())
        }}>Order Ice Cream</button>
        <input type="text" placeholder="1" ref={inputRef}/>
        <button onClick={()=>{
            let value = parseInt(inputRef.current.value);
            // console.log(value);
            if(!value){
                value=1;
            }
            dispatch(restocked(value));
        }}>Restock Ice creams </button>
    </div>);
}


export default Icecreamview;