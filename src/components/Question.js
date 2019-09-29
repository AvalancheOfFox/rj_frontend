import React, { Component } from 'react'


export default class Question extends Component{


    showMeDetails =() => {
        console.log(this.props.category)
    }


render(){
    return(
        <div className="single-question">
            <h4>{this.props.question.question}</h4>
            <p>{this.props.category.title}</p>
            <p>{this.showMeDetails()}</p>
        </div>
    )
}

}