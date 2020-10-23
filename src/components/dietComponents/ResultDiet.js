import React, { Component } from 'react';
import axios from "axios";

export class resultDiet extends Component {
    constructor(props){
        super(props);
        this.state ={
          diets:[],
          id:0,
          diet: '',
          kcal: '',
          titleDiet: ''
        }
    
      }
      componentDidMount(){
        axios.get('https://back-healthy-app.herokuapp.com/diet/')
        .then((res)=>{
          this.setState({
            diets:res.data,
            id:0,
            diet: '',
            kcal: '',
            titleDiet: ''
            
          })
        
        })
      }
      
      submit(event,id){
        event.preventDefault();
        if(id === 0){
          axios.post("https://back-healthy-app.herokuapp.com/diet/",{
            diet: this.state.diet,
            kcal: this.state.kcal,
            titleDiet: this.state.titleDiet
          })
          .then(()=>{
            this.componentDidMount();
          })
        }else{
          axios.put(`https://back-healthy-app.herokuapp.com/diet/${id}`,{
            id:this.state.id,
            diet:this.state.diet,
            kcal: this.state.kcal,
            titleDiet: this.state.titleDiet
          }).then(()=>{
            this.componentDidMount();
          })
        }
      }
      //TODO sprawdz na stronoie
      getDietFor(id){
        this.getResult(1)
        axios.get(`https://back-healthy-app.herokuapp.com/diet/for/${id}`)
        .then((res)=>{
          this.setState({
            diets: res.data,
            id:res.data.id,
            diet: res.data.diet,
            kcal: res.data.kcal,
            titleDiet: res.data.titleDiet
          })
        })
        
      }
      getResult(id){
        axios.get(`https://back-healthy-app.herokuapp.com/diet/result/${id}`)
        .then((res)=>{
          this.setState({
            diets: res.data,
            id:res.data.id,
            diet: res.data.diet,
            kcal: res.data.kcal,
            titleDiet: res.data.titleDiet
          })
        })
      }
    render() {
        return (
              <ul className="collapsible flow-text">
                <li>
                  <div className="collapsible-header pink-text text-darken-4"><i className="material-icons">kitchen</i>Adjust your diet to the result</div>
                    <div className="collapsible-body">
                    <div>
                    <button onClick={()=>this.getDietFor(3)} className="waves-effect waves-light btn modal-trigger btn-large" href="#all">For All</button>
                    <div id="all" className="modal">
                        <div className="modal-content">
                            <h3>Diets For All</h3>
                            {this.state.diets.map(element=>
                                <div key={element.id}>
                                  <ul className="collapsible " data-collapsible="accordion">
                                    <li>
                                      <div className="collapsible-header"><i className="material-icons">assignment</i>{element.titleDiet}</div>
                                      <div className="collapsible-body">
                                        <div>{element.diet}</div>
                                        <div>{element.kcal}</div>
                                        <br/>
                                        <div>
                                          <button  className="btn light-blue waves-effect waves-light" >Agree
                                            <i className="material-icons right">send</i>
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                )}
                            <div className="modal-footer">
                                <button className="modal-action modal-close waves-effect waves-green btn-flat">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div>
                    <button onClick={()=>this.getDietFor(2)} className="waves-effect waves-light btn modal-trigger btn-large" href="#vegetarians">For Vegetarians</button>
                    <div id="vegetarians" className="modal">
                        <div className="modal-content">
                            <h3>Diets For Vegetarians</h3>
                            {this.state.diets.map(element=>
                              <div key={element.id}>
                              <ul className="collapsible " data-collapsible="accordion">
                                <li>
                                  <div className="collapsible-header"><i className="material-icons">assignment</i>{element.titleDiet}</div>
                                  <div className="collapsible-body">
                                    <div>{element.diet}</div>
                                    <div>{element.kcal}</div>
                                    <br/>
                                    <div>
                                      <button  className="btn light-blue waves-effect waves-light" type="submit">Agree
                                        <i className="material-icons right">send</i>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div> 
                            )}
                            <div className="modal-footer">
                                <button className="modal-action modal-close waves-effect waves-green btn-flat">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div>
                    <button onClick={()=>this.getDietFor(1)} className="waves-effect waves-light btn modal-trigger btn-large" href="#vegan">For Vegans</button>
                    <div id="vegan" className="modal">
                        <div className="modal-content">
                          <h3>Diets For Vegetarians</h3>
                            {this.state.diets.map(element=>
                              <div key={element.id}>
                              <ul className="collapsible " data-collapsible="accordion">
                                <li>
                                  <div className="collapsible-header"><i className="material-icons">assignment</i>{element.titleDiet}</div>
                                  <div className="collapsible-body">
                                    <div>{element.diet}</div>
                                    <div>{element.kcal}</div>
                                    <br/>
                                    <div>
                                      <button  className="btn light-blue waves-effect waves-light" type="submit">Agree
                                        <i className="material-icons right">send</i>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div> 
                            )}
                            <div className="modal-footer">
                                <button className="modal-action modal-close waves-effect waves-green btn-flat">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </li>
              </ul>
        )
    }
}

export default resultDiet
