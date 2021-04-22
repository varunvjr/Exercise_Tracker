
import React, { Component } from 'react'
import axios from 'axios';
export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state={
            username:''
        }
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const user={
            username:this.state.username
        }
        this.setState({
            username:''
        })
        console.log("User Created:",user)
        axios.post('http://localhost:8000/users',user)
            .then(res=>console.log(res.data))
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label>Username</label>
                <input
                    className="form-control"
                    type="text"
                    onChange={this.onChangeUsername}
                    required
                    value={this.state.username}
                />
                </div>
                <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Create User"/>
                </div>
        
                </form>
            </div>
        )
    }
}


