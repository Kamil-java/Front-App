import React, { Component } from 'react';
import axios from "axios";
import './spacing.css';

export class Intensive extends Component {
    constructor(props){
        super(props);
        this.state ={
          workouts:[],
          id:0,
          titleWorkout:'',
          intensity:'',
          loaded: false,
          workout:''
        }
    
      }
      componentDidMount(){
        axios.get("https://back-healthy-app.herokuapp.com/workout/strong/2")
        .then((res)=>{
          this.setState({
            workouts:res.data,
            id:0,
            titleWorkout:'',
            intensity: '',
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
              <div id="intens" className="col s7 ">
                <div>
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header z-depth-5"><i className="material-icons">fitness_center</i>Intensive Trening</div>
                      <div className="collapsible-body">
                        <div>
                            <button className="waves-effect waves-light btn modal-trigger btn-large" href="#btn2"><h6>General training</h6></button>
                              <div id="btn2" className="modal ">
                                <div className="modal-content">
                                  <h4>This is your workout</h4>
                                  {this.state.workouts.map(element=>
                                  <div key={element.id}>
                                    <ul className="collapsible">
                                      <li>
                                        <div onChange={(e) => e.target.value} value={element.titleWorkout} className="collapsible-header"><i className="material-icons">fitness_center</i>{element.titleWorkout}</div>
                                        <div className="collapsible-body">
                                          <div onChange={(e) => e.target.value} value={element.workout}>{element.workout}</div>
                                          <br/>
                                          <div>
                                            <button  className="btn light-blue waves-effect waves-light modal-close" type="button">OK
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

export default Intensive
