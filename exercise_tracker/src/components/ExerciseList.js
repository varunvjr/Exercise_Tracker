import axios from 'axios';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
const Exercise=(props)=>(
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={`/edit/${props.exercise._id}`}>edit</Link>|<a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>Delete</a>
        </td>  

    </tr>
)

export default class ExerciseList extends Component {
    constructor(props){
        super(props);
        this.state={
            exercises:[]
        }
        this.deleteExercise=this.deleteExercise.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:8000/exercises')
            .then(res=>{
                this.setState({exercises:res.data})
            })
    }
    deleteExercise(id){
        axios.delete(`http://localhost:8000/exercises/${id}`)
            .then(res=>console.log(res.data));
        this.setState({
            exercises:this.state.exercises.filter(el=>el._id!==id)
        })
    }
    exerciseList(){
        return this.state.exercises.map(curExercise=>{
            return <Exercise exercise={curExercise} deleteExercise={this.deleteExercise} key={curExercise._id}/>;
        })
    }
    render() {
        return (
            <div className="container">
            <h1>Logged Exercises</h1>
            <table className="table">
                <thead className="thread-light">
                <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>   
            </thead> 
            <tbody>
                {this.exerciseList()}
            </tbody>
            </table>
            </div>
        )
    }
}

