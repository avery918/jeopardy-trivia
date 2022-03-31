import React from "react"
import "../css/popup.css"


export default function Popup(props) {

    return ( 
        <div className="popup-screen">
            <div>
                <p className="answer-evaluation">{props.result}</p>
                {(props.result !== "You are correct" ) &&
                 <p className="correct-answer"> The correct answer is "{props.correctAnswer.toLowerCase()}"</p>}
                <button onClick={() => {
                        
                        if(props.result === "You are correct"){
                            props.adjustScore(props.value);
                        }

                        props.answerScreenView()
                    }} className="btn-close">Close</button>
            </div>
        </div>
    )
}