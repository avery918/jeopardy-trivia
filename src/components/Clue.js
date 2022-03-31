import React from "react"

export default function Clue ( props ) {


    

    return (
        <button 
            value={props.value} 
            className={`category-clue`}
            onClick={(event) =>{  
                props.showClue(event, props.question, props.answer, props.value )
            }}>
                ${props.value}
        </button>
                
    )
}