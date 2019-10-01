import React, { Component } from 'react'


export default class Question extends Component{

    state = {
        flipped: false,
        answered: false
    }

    handleQuestionFlip = () => {
        if(this.state.flipped === false){
            this.setState({
                flipped: true
            })
        }
    }

    handleAnswer = () => {
        console.log("handleAnsweer hit")
        if (this.state.answered === false) {
            this.setState({
                answered: true
            })
        }
    }

render(){
    return(
        <div className="single-question" >
            <div onClick={this.handleQuestionFlip}>
                <h1>Value: ${this.props.question.value}</h1>
                <h1>{(this.props.question.category).charAt(0).toUpperCase() + this.props.question.category.slice(1)}</h1>
                <h4 onClick={this.handleAnswer} className={!this.state.flipped == true ? "hidden": ""}>{this.props.question.question}</h4>
                <p className={!this.state.answered == true ? "hidden": ""}>{this.props.question.answer}</p>
            </div>
            <div className="correct" onClick={() => this.props.plusScore(this.props.question.value)}> Correct </div>
            <div className="incorrect" onClick={() => this.props.minusScore(this.props.question.value)}> Incorrect </div>
        </div>
    )
}

}