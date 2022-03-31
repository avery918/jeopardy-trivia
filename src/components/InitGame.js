import "../css/initGame.css"

export default function InitGame(props) {
      return (
        <div className="init-page">
            <h1 className="page-title">Welcome to Our Trivia Game</h1>
            <button onClick={props.startGame}  className="start-game">Start Game</button>
        </div>
      )
}