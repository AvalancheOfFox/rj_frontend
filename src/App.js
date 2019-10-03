import React from 'react';
import './App.css';
import GameBoard from './containers/GameBoard'
import Login from './components/Login'
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import fourOhFour from './components/fourOhFour'

class App extends React.Component {

  state = {
    questions: [],
    currentUserId: null,
    currentName: ""
  }

  //initial fetch
  componentDidMount(){
    console.log("app component mounted")
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
      .then(data => this.addQuestionsToState(data));
  }
// adds to state
  addQuestionsToState = (data) =>{
    console.log("adding questions to state", data)
    this.setState({
      questions: data
    })
    console.log(this.state.questions)
  }

  // checks if the state even has a currentUserId with boolean
  isLoggedIn() {
    return !!this.state.currentUserId
  }

  returnCurrentUserId() {
    return this.state.currentUserId
  }

  // takes in our current user id and sets state
  setCurrentUserId = (user) => {
    this.setState({
      currentUserId: user.id,
      currentName: user.username
    })
  }

  setUsername = (username) =>{
    this.setState({
      currentUsername: ""
    })
  } 

  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={"https://www.learningtogive.org/sites/default/files/jeopardy-logo.png"} className="Jeopardy-logo" alt="logo" />
        <div>
        <Switch>
              <Route path='/' exact render={(props) => this.state.currentUserId ? <Redirect to='/game' /> : <Login setUser={this.setCurrentUserId} />}/>
              <Route path='/game' exact render={(props) => this.state.currentUserId ? <GameBoard username={this.state.currentName} questions={this.state.questions} user={this.state.currentUsername} /> : <Redirect to='/login'/>} />   
              <Route component={ fourOhFour } /> 
          {/* { <GameBoard username={this.state.currentName}questions={this.state.questions} user={this.state.currentUsername}/>  : <Login setUser={this.setCurrentUserId}/>}   */}
        </Switch>
        </div>
      </header>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
