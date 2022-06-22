import React from "react";

export default function RatingButton(props){
    return(
        <button className={props.identifier === props.selected ? "button selected" : "button"} onClick={()=>{props.setSelected(props.identifier)}}>{props.identifier}</button>
    )
}