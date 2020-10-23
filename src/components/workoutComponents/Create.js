import React, { Component } from 'react';
import axios from "axios";
import './spacing.css';


export class Create extends Component {
    constructor(props){
        super(props);
        this.state ={
          workouts:[],
          id:0,
          titleWorkout:'',
          editMode: false,
          intensity: '',
          workout:''
        }
    
      }
      componentDidMount(){
        axios.get("https://back-healthy-app.herokuapp.com/workout/")
        .then((res)=>{
          this.setState({
            workouts:res.data,
            id:0,
            titleWorkout:'',
            intensity: '',
            workout: ''
          })
          const M = window.M;
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {});
        })
      }
      
      submit(event,id){
        event.preventDefault();
        if(id === 0){
          axios.post("https://back-healthy-app.herokuapp.com/workout/",{
            titleWorkout:this.state.titleWorkout,
            intensity: this.state.intensity,
            workout: this.state.workout
          })
          .then((res)=>{
            this.componentDidMount();
          })
        }else{
          axios.put(`https://back-healthy-app.herokuapp.com/workout/${id}`,{
            id:this.state.id,
            titleWorkout:this.state.titleWorkout,
            intensity: this.state.intensity,
            workout: this.state.workout
          }).then(()=>{
            this.componentDidMount();
          })
    
        }
    
      }
      delete(id){
        axios.delete(`https://back-healthy-app.herokuapp.com/workout/${id}`)
        .then(()=>{
          this.componentDidMount();
        })
      }
      deleteAll(){
        axios.delete('https://back-healthy-app.herokuapp.com/workout/all')
        .then(() =>{
          this.componentDidMount();
        }
        )
      }
      edit(id){
        axios.get(`https://back-healthy-app.herokuapp.com/workout/${id}`)
        .then((res)=>{
          console.log(res.data);
          this.setState({
            id:res.data.id,
            titleWorkout:res.data.titleWorkout,
            intensity: res.data.intensity,
            editMode: true,
            workout: res.data.workout
          })
        })
      }
     
    render() {
        return (
          <div id="create">
             <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div className="collapsible-header"><i className="material-icons">fiber_new</i>Create your own training</div>
                <div className="collapsible-body">
                <button className="waves-effect waves-light btn modal-trigger btn-large" href="#createNewWorkout"><i className="material-icons">add</i></button>
                  <form onSubmit={(e)=>this.submit(e,this.state.id)} className="col s12">
                    <div id="createNewWorkout" className="modal">
                      <div className="modal-content">
                        <h4>Create Own Workout</h4>
                        <div className="row">
                          <div className="row">
                            <div className="input-field col s6">
                              <input onChange={(e)=>this.setState({titleWorkout:e.target.value})} value={this.state.titleWorkout} id="workoutName" type="text"/>
                              <label htmlFor="workoutName">Workout Title</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <textarea onChange={(e)=>this.setState({workout:e.target.value})} value={this.state.workout} id="workoutTask" className="materialize-textarea"></textarea>
                              <label htmlFor="workoutTask">Workout description</label>
                            </div>
                          </div>
                          <div className="input-field col s12">
                            <select onChange={(e)=>this.setState({intensity:e.target.value})} value = {this.state.intensity}>
                              <option value="">Choose strenght workout</option>
                              <option value="2">Intensive</option>
                              <option value="1">Optimal</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button className="modal-close btn light-blue waves-effect waves-light right" type="submit" name="action">Create
                          <i className="material-icons right">send</i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li> 
            </ul>
            <div className="right-align">
              <h5>Delete All </h5>
              <button onClick={(e)=>this.deleteAll()} className="btn red darken-2 waves-effect waves-light btn-large" type="submit" name="action">
                <i className="material-icons">delete</i>
              </button>
            </div>
            <div className="row">
              {this.state.editMode===true &&
                <form onSubmit={(e)=>this.submit(e,this.state.id)} class="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <i class="material-icons prefix">create</i>
                    <input onChange={(e)=>this.setState({titleWorkout:e.target.value})} value={this.state.titleWorkout} id="workoutName" type="text"/>
                    <label htmlFor="workoutName">Workout Title</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i class="material-icons prefix">create</i>
                    <textarea onChange={(e)=>this.setState({workout:e.target.value})} value={this.state.workout} id="workoutTask" className="materialize-textarea"></textarea>
                    <label htmlFor="workoutTask">Workout description</label>
                  </div>
                </div>
                <div className="input-field col s12">
                  <select onChange={(e)=>this.setState({intensity:e.target.value})} value = {this.state.intensity}>
                    <option value="">Choose strenght workout</option>
                    <option value="2">Intensive</option>
                    <option value="1">Optimal</option>
                  </select>
                </div>
                <button onClick={()=> this.state.editMode = false} className="modal-close btn light-blue waves-effect waves-light right" type="submit" name="action">Confirm
                  <i className="material-icons right">send</i>
                </button>
              </form>
              }
              
            </div>
            <h4 className="t-size orange-text">Your workout</h4>
            <div>
              <table className="striped centered">
              <thead>
                <tr className="orange-text">
                  <th>Workout</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.workouts.map((element, index) =>
                <tr key={element.id}>
                  <td>
                    <button className="waves-effect waves-light btn modal-trigger btn-large pink darken-4" href={"#createOwnWorkout_" + index}>{element.titleWorkout}</button>
                    <div id={"createOwnWorkout_" + index} className="modal">
                      <div className="modal-content">
                        <h4>{element.titleWorkout}</h4>
                        <p>{element.workout}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button onClick={(e)=>this.edit(element.id)} className="btn yellow darken-2 waves-effect waves-light btn-large" type="submit" name="action">
                      <i className="material-icons">edit</i>
                    </button>
                  </td>
                  <td>
                    <button onClick={(e)=>this.delete(element.id)} className="btn red darken-2 waves-effect waves-light btn-large" type="submit" name="action">
                      <i className="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
                )}
              </tbody>
            </table>
            </div>
          </div>
        )
    }
}

export default Create
