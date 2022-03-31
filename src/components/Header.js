
import "../css/header.css"


export default function Header(props) {
    

    return (

        <div className="header">
            <button onClick={props.startNewGame} className="new-game-btn">New Game</button>
            <p className="header-title">Trivia Game!</p>
            <p className="score">Score: {props.playerScore}</p>
        </div>
    );
}