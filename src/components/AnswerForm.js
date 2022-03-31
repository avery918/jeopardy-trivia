import React from "react"
import Popup from "../components/Popup"
import "../css/answerForm.css"



export default function  AnswerForm(props) {
    let correctPhrase = `What is ${props.answer}`.toUpperCase();
    const [answer, setAnswer] = React.useState("");
    const [showPopup, setShowPopup] = React.useState(false);
    const [result, setResult] = React.useState("");
    


    /* save the user's answer to answer state */
    function handleChange(event) {
        let userAnswer = event.target.value.toUpperCase()
        setAnswer(userAnswer.replace(/[^a-z\d\s]+/gi, "")); 
    }
    
    /* on submit user answer is checked to see if it matches the correct answer */
    function handleSubmit(event) {
        event.preventDefault();
        event.target.display = "none";
        
        setResult(() => {
            correctPhrase = correctPhrase.replace(/[^a-z\d\s]+/gi, "");
            const result =  (answer === correctPhrase) ? "You are correct" : "Sorry that answer is incorrect";
            
            return result;
        }) 
        setShowPopup(true)
       
    }

    return (
       
        <div className="answer-form">
            {!showPopup ?
            <form onSubmit={handleSubmit}>
                <h1 className="question">{props.question}</h1>
                <p className="disclaimer">( answer format  =  "What is ______" )</p>
                <input
                    className="answer-input"
                    type="text"
                    placeholder="Answer here"
                    onChange={handleChange}
                />
                <button className="btn-submit">Submit</button>
            </form> :
            <Popup 
                adjustScore={props.adjustScore}
                value={props.value}
                showPopup={showPopup}
                result={result}
                correctAnswer={correctPhrase}
                answerScreenView={props.answerScreenView}
            />}
        </div>
    )
}