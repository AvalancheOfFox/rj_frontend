import React, { Component } from 'react'


export default class Question extends Component{

render(){
    return(
        <div>
            <h4>{this.props.question.question}</h4>
        </div>
    )
}

}