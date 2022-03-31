
import React from "react"
import Clue from "../components/Clue"
import "../css/category.css"


export default function Category(props) {

    const [myClues, setMyClues] = React.useState([]);
    const[categoryClues, setCategoryClues] = React.useState([]);

    React.useEffect( () => {
        fetch(`https://jservice.io/api/clues?category=${props.id}`)
            .then(res => res.json()
            .then(data => {
                
                

                setCategoryClues( () => {
                    let clueValue = 0;
                    return data.map(clue => {
                        clueValue += 200;
                        return {
                            answer: clue.answer,
                            categoryId:  clue.category_id,
                            id: clue.id,
                            question: clue.question,
                            value: clueValue
                        }
                      
                    })
                })
            }))
    }, [props.categories])

    React.useEffect( () => {
        setMyClues( () => {
            let newClues = [];

            newClues = categoryClues.map(clue => {
                
                            return <Clue
                            answer={clue.answer}
                            question={clue.question}
                            value={clue.value}
                            id={clue.id}
                            key={clue.id}
                            showClue={props.showClue}
                        />
                        
                        })
                        console.log(newClues.slice(0, 5))
            return newClues.slice(0, 5);
        })

    }, [categoryClues])


    return(
        
            <div className="category">
                <div>
                    <p className="category-title">{props.title}</p>
                </div>
               
               
                {myClues}
           </div>
     
        
        
    )
}
