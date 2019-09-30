import React, { Component } from 'react'


export default class Question extends Component{

    state = {
        answered: false
    }


render(){
    return(
        <div className="single-question" onClick={ () => {this.setState({answered:true})}}>
            <h1>Value: ${this.props.question.value}</h1>
            <h4>{this.props.question.question}</h4>
            <p className={!this.state.answered == true ? "hidden": ""}>{this.props.question.answer}</p>
            
        </div>
    )
}

}