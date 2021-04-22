import axios from 'axios';
import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class EditExercise extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeDuration=this.onChangeDuration.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            username:"",
            description:"",
            duration:0,
            date:new Date(),
            users:[]
       }
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get(`http://localhost:8000/exercises/${id}`)
            .then(res=>{
               this.setState({
                   username:res.data.username,
                   description:res.data.description,
                   duration:res.data.duration,
                   date:new Date(res.data.date)
               })
            })
            .catch(err=>console.log(err))
    }
    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration:e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date
        });
    }
    onSubmit(e){
        e.preventDefault();
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        console.log("Exercise",exercise);
        axios.put(`http://localhost:8000/exercises/${this.props.match.params.id}`,exercise)
            .then(res=>console.log(res.data))
        window.location="/"
    }
    render() {
        return (
            <div className="container">
                <h3>Edit Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input ref="userInput"
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                        
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration :(in Minutes)</label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Edit Exercise"/>
                    </div>
                
                </form>












            </div>
        )
    }
}
