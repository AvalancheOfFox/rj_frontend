import React, { Component } from 'react';
import App from '../App'
import Question from '../components/Question'




export default class GameBoard extends Component{

    state = {
        AnsQuestions: [],
        categories: [],
        score: 0,
        answeredQuestions: []
    }

    componentDidMount(){
       this.getCategories()
    }

    getCategories = () => {
        return fetch('http://jservice.io/api/categories?count=20')
            .then(res => res.json())
            .then(categories => this.setState({
                categories: categories
            }))
    }

    // increments our score, called by each question. conditional on answer visibility
    plusScore = (value, id, flipState) =>{
        console.log(flipState, "flipState")
        if (flipState != true) {
            alert(`You must read the question before scoring yourself.`)
            return
        }
        if (this.state.answeredQuestions.includes(id)) {
            alert(`You've already answered this question!`)
        } else{
        this.setState({
            score: parseInt(this.state.score) + parseInt(value),
            answeredQuestions: [...this.state.answeredQuestions, id]
        })
        }
    }

    // decrements our score, called by each question. conditional on answer visibility
    minusScore = (value, id, flipState) => {
        console.log(flipState, "flipState")
        if(flipState != true){
            alert(`You must read the question before scoring yourself.`)
            return
        }
        if(this.state.answeredQuestions.includes(id) ){
            alert(`You've already answered this question!`)
        } else{
        this.setState({
            score: parseInt(this.state.score) - parseInt(value),
            answeredQuestions: [...this.state.answeredQuestions, id]
        })
    }
    }

  
    // returns us the questions
    allQuestions = () => {
        return this.props.questions.map((q) => {
            return <Question plusScore={this.plusScore} minusScore={this.minusScore} question={q} key={q.id} />
        })
    }
   

    render() {
        return(
            <div>
            <div className="currentScore">
                <p>Welcome {this.props.username}</p>
                 Score: {this.state.score}
            </div>
            <div className="gameboard">
                {this.allQuestions()}
            </div>
            </div>
        )
    }
}