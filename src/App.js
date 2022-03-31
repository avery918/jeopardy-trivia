import React from "react";
import InitGame from "./components/InitGame.js"
import Header from "./components/Header.js"
import Category from "./components/Category.js";
import AnswerForm from "./components/AnswerForm.js";
import "./css/styles.css"





function App() {

  const [playerScore, setPlayerScore] = React.useState(0);
  const [gameBoard, setGameBoard] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [displayBoard, setDisplayBoard] = React.useState(false);
  const [newGame, setNewGame] = React.useState(false);
  const [answerScreen, setAnswerScreen] = React.useState(false);
  const [clueInfo, setClueInfo] = React.useState({
                                    question:  "",
                                    correctAnswer: ""
                                          
                                  });



  React.useEffect( () => {
    
    
      const random =Math.floor(Math.random() * 40) + 1

      fetch(`https://jservice.io/api/categories?count=5&offset=${random}`)
            .then(res => res.json())
            .then(data => {
                setCategories(() => {
                    return( data.map(category => {
                        return {
                                  id: category.id,
                                  title: category.title,
                                  cluesCount: category.clues_count
                                }
                    }))
                })
            })     
      setPlayerScore(0);    
  }, [newGame]);


  
  // displays game board & init game
  function initialGame() {
      setDisplayBoard(prev => !prev);
      startNewGame();
  }

  // starts a new game
  function startNewGame() {
    setGameBoard(() => {
      return categories.map(category => {
                return <Category
                      key={category.id}
                      categories={categories}
                      id={category.id}
                      title={category.title}
                      showClue={showClue}
                    />
                ;
             }) 
    });

      setNewGame(prev => !prev); 
  }


  /* takes and saves clicked clue info for user to answer on answerForm screen */
  function showClue(event, question, answer,value) {
      
      setClueInfo({
        question :question,
        correctAnswer: answer,
        value: value
      }); 
      answerScreenView();
      event.target.disabled = true;
      event.target.classList.add("btn-disabled");
  }

 /* use to show and hide answerFormScreen */
  function answerScreenView() {
    setAnswerScreen(prevView => !prevView);
  }

  /* use to adjust user's score */
  function adjustPlayerScore(value) {
    setPlayerScore( prevScore => prevScore += value);
  }

  return (
    <div className="App">
      {!displayBoard && <InitGame startGame={initialGame}/>}

      {answerScreen &&
                <AnswerForm
                  question={clueInfo.question}
                  answer={clueInfo.correctAnswer}
                  value={clueInfo.value}
                  answerScreenView={answerScreenView}
                  adjustScore={adjustPlayerScore}
                />  
      }

      {displayBoard  && 
                <div>
                  <div className="board">
                    <Header 
                      startNewGame={startNewGame} 
                      playerScore={playerScore}
                    />
                    {gameBoard}
                  </div>
                </div> 
      }

    </div>
  );
}

export default App;