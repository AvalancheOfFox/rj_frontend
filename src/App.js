import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.learningtogive.org/sites/default/files/jeopardy-logo.png"} className="Jeopardy-logo" alt="logo" />

        <p>
          T
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
