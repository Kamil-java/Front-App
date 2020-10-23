import React, { Component } from 'react';
import axios from "axios";
import './spacing.css';

export class Optimal extends Component {
    constructor(props){
        super(props);
        this.state ={
          workouts:[],
          id:0,
          titleWorkout:'',
          loaded: false,
          workout:''
        }
    
      }
      componentDidMount(){
        axios.get("https://back-healthy-app.herokuapp.com/workout/strong/1")
        .then((res)=>{
          this.setState({
            workouts:res.data,
            id:0,
            titleWorkout:'',
            workout: ''
          })
          const M = window.M;   
          var elems = document.querySelectorAll('.collapsible');
          M.Collapsible.init(elems, {});
    
        })
      }

    render() {
        return (
            <div>
              <div id="optimal" className="col s7">
                <div>
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header z-depth-5">
                        <i className="material-icons">fitness_center</i>
                        Optimal Training
                        </div>
                        <div className="collapsible-body">
                          <div>
                            <button className="waves-effect waves-light btn modal-trigger btn-large" href="#btn4"><h6>General training</h6></button>
                            <div id="btn4" className="modal ">
                              <div className="modal-content">
                                <h3>This is your workout</h3>
                                {this.state.workouts.map(element=>
                                <div key={element.id}>
                                  <ul className="collapsible " data-collapsible="accordion">
                                    <li>
                                      <div className="collapsible-header"><i className="material-icons">fitness_center</i>{element.titleWorkout}</div>
                                      <div className="collapsible-body">
                                        <div>{element.workout}</div>
                                        <br/>
                                        <div>
                                          <button  className="btn light-blue waves-effect waves-light modal-close" type="submit">OK
                                            <i className="material-icons right">check</i>
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                )}
                                </div> 
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
        )
    }
}

export default Optimal
