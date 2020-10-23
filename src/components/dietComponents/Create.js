import React, { Component } from 'react';
import axios from "axios";

export class Create extends Component {
    constructor(props){
        super(props);
        this.state ={
          diets:[],
          id:0,
          activ: false,
          diet: '',
          forWhom: '',
          titleDiet: ''
        }
    
      }
      componentDidMount(){
        axios.get("https://back-healthy-app.herokuapp.com/diet/")
        .then((res)=>{
          this.setState({
            diets:res.data,
            id:0,
            diet: '',
            forWhom: '',
            titleDiet: ''
          })
    
        })
      }
      
      submit(event,id){
        event.preventDefault();
        if(id === 0){
          axios.post("https://back-healthy-app.herokuapp.com/diet/",{
            diet: this.state.diet,
            forWhom: this.state.forWhom,
            titleDiet: this.state.titleDiet
          })
          .then(()=>{
            this.componentDidMount();
          })
        }else{
          axios.put(`https://back-healthy-app.herokuapp.com/diet/${id}`,{
            id:this.state.id,
            diet: this.state.diet,
            forWhom: this.state.forWhom,
            titleDiet: this.state.titleDiet
          }).then(()=>{
            this.componentDidMount();
          })
    
        }
      }
    render() {
        return (
          <div>
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header pink-text text-darken-4"><i className="material-icons">mode_edit</i>Establish your own diet</div>
              <div className="collapsible-body">
                <button  className="waves-effect waves-light btn modal-trigger btn-large" href="#createNewDiet"><i className="material-icons">add</i></button>
                <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                    <div id="createNewDiet" className="modal">
                      <div className="modal-content">
                        <h4>Create Own Diet</h4>
                        <div className="row">
                          <div className="row"> 
                            <div className="input-field col s6">
                              <input onChange={(e)=>this.setState({titleDiet:e.target.value})} value={this.state.titleDiet} id="dietName" type="text"/>
                              <label htmlFor="dietName">Diet Name</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <textarea onChange={(e)=>this.setState({diet:e.target.value})} value={this.state.diet} id="deitDes" className="materialize-textarea"></textarea>
                              <label htmlFor="dietDes">Diet description</label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input onChange={(e)=>this.setState({diet:e.target.value})} value={this.state.diet} id="dietKcal" type="number"></input>
                              <label htmlFor="dietKcal">Amount calories</label>
                            </div>
                          </div>
                          <div className="input-field col s12">
                            <select onChange={(e)=>this.setState({forWhom:e.target.value})} value = {this.state.forWhom}>
                              <option value="">Choose for whom</option>
                              <option value="3">For All</option>
                              <option value="2">For Vegetarians.</option>
                              <option value="1">For vegan</option>
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
          </div>
        )
    }
}

export default Create
