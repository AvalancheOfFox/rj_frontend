import React, { Component } from 'react';





export default class Login extends Component {

    state ={
        logIn: false,
        username: "",
        password: "",
        errors: []
    }

    onChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("a submit event fired")

    }

    loginHandler = (event) =>{
        event.preventDefault()
        console.log("login handler fired")
        const config ={
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                cumulative_score: 0,
            })
        }
        fetch('http://localhost:3000/users', config)
        .then(res => res.json())
        .then( data => this.props.setUser(data))
    }

    createAccountHandler = (event) => {
        event.preventDefault()
        console.log("an account was attempted to create")
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                
            })
        }
        fetch('http://localhost:3000/users', config)
        .then(res => res.json())
        .then( data => this.props.setUser(data))
    }


   render() {
       return (
           
           <form className="formStyle">
               <h1>Please Login to Continue</h1>
               
               <input
                   type="text"
                   placeholder="Username"
                   onChange = {this.onChange}
                   name="username"
                   value={this.state.username}
               />
               
               <input
                   type="Password"
                   placeholder="password"
                   onChange={this.onChange}
                   name="password"
                   value={this.state.password}
               />
                <br/>
               <button onClick={this.loginHandler}>Login</button>
               <button onClick={this.createAccountHandler}>Create Account</button>
           </form>
         
       );
   }
}