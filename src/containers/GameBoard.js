import React, { Component } from 'react';
import App from '../App'
import Question from '../components/Question'




export default class GameBoard extends Component{

    state = {
        AnsQuestions: [],
        score: 0,
    }
    
    handleQuestionClick = (question) => {
        console.log(question, "a handleQuestionClick fired")
    }

    allQuestions = () => {
        return this.props.questions.map((q) => {
            return <Question handleQuestionClick = {this.handleQuestionClick} question={q} key={q.id} category={q.category} />
        })
    }
   

    render() {
        

        return(
            <div className="gameboard">
                {this.allQuestions()}
            </div>
        )
    }
}