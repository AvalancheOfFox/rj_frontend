import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './containers/GameBoard'

class App extends React.Component {

  state = {
    questions: []
  }

  componentDidMount(){
    console.log("app component mounted")
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
      .then(data => this.addQuestionsToState(data));
  }

  addQuestionsToState = (data) =>{
    console.log("adding questions to state", data)
    this.setState({
      questions: data
    })
    console.log(this.state.questions)
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.learningtogive.org/sites/default/files/jeopardy-logo.png"} className="Jeopardy-logo" alt="logo" />
        
        <div>
          <GameBoard questions={this.state.questions} /> 
        </div>
       
      </header>
    </div>
  );
  }
}

export default App;
