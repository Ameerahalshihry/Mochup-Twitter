        import React, { Component } from 'react'
        import axios from 'axios'

        export default class tweet extends Component {
            state = {
                tweets : []
            }
            submitHandler = () =>{

                axios.post("/tweets", { name : this.state.name, description : this.state.description})
                .then(response => {
                console.log(response)
                let temp = {...this.state}
                temp.tweets.push({name: this.state.name, description: this.state.description})
            
                this.setState(temp)
                })
                .catch(err => console.log(err))
            }
        render() {
            return (
            <div>
            <textarea name="Tweet" ></textarea> 
            <button onClick={this.submitHandler}>New Tweet</button>
            </div>
            )
        }
    }
