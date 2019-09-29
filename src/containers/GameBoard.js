import React, { Component } from 'react';
import App from '../App'
import Question from '../components/Question'




export default class GameBoard extends Component{

    state = {
        AnsQuestions: [],
    }
    
    allQuestions = () => {
        return this.props.questions.map((q) => {
            return <Question question={q} key={q.id} />
        })
    }
   

    render() {
        

        return(
            <div>
                {this.allQuestions()}
            </div>
        )
    }
}