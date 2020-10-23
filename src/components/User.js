import React from 'react';
import axios from "axios";
import '../style/userStyle.css';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      users:[],
      id:0,
      age:'',
      height:'',
      weight:'',
      sex:'',
      workoutTime: '',
      result: ''
    }

  }
  componentDidMount(){
    axios.get("https://back-healthy-app.herokuapp.com/person/")
    .then((res)=>{
      this.setState({
        users:res.data,
        id:0,
        age:'',
        height:'',
        weight:'',
        sex:'',
        workoutTime: '',
        result:''
      })

    })
  }
  
  submit(event,id){
    event.preventDefault();
    if(id === 0){
      axios.post("https://back-healthy-app.herokuapp.com/person/",{
        age:this.state.age,
        height:this.state.height,
        weight:this.state.weight,
        workoutTime: this.state.workoutTime,
        sex:this.state.sex
      })
      .then((res)=>{
        this.componentDidMount();
      })
    }else{
      axios.put(`https://back-healthy-app.herokuapp.com/person/${id}`,{
        id:this.state.id,
        age:this.state.age,
        height:this.state.height,
        weight:this.state.weight,
        workoutTime: this.state.workoutTime,
        sex:this.state.sex
      }).then(()=>{
        this.componentDidMount();
      })

    }

  }
  delete(id){
    axios.delete(`https://back-healthy-app.herokuapp.com/person/${id}`)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get(`https://back-healthy-app.herokuapp.com/${id}`)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        age:res.data.age,
        height:res.data.height,
        weight:res.data.weight,
        workoutTime: res.data.workoutTime,
        sex:res.data.sex,
      })
    })
  }
  render(){
  return (
    <div className="back-user">
      <div className="container">
        <div className="row">
          <div className="col s7">
            <form onSubmit={(e)=>this.submit(e,this.state.id)}>
              <div className="input-field col s12 ">
                <i className="material-icons prefix">create</i>
                <input onChange={(e)=>this.setState({age:e.target.value})} value={this.state.age} id="ageIn" type="number" className="validate"/>
                <label htmlFor="ageIn" className="green-text text-darken-4">Age</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">create</i>
                <input onChange={(e)=>this.setState({height:e.target.value})} value={this.state.height} id="heightIn" type="number" className="validate"/>
                <label htmlFor="heightIn" className="green-text text-darken-4">Height</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">create</i>
                <input onChange={(e)=>this.setState({weight:e.target.value})} value={this.state.weight} id="weightIn" type="number" className="validate"/>
                <label htmlFor="weightIn" className="green-text text-darken-4">Weight</label>
              </div>
              <div className="input-field col s12">
                <div>
                  <i className="material-icons prefix">wc</i>
                  <label htmlFor ="ManIn">
                    <input onChange={(e)=>this.setState({sex:e.target.value})} value="Man" id="ManIn" className="with-gap" name="group" type="radio"/>
                      <span className="green-text text-darken-4">Man</span>
                  </label>
                  <label htmlFor="WomanIn">
                    <input onChange={(e)=>this.setState({sex:e.target.value})} value="Woman" id="WomanIn"className="with-gap" name="group" type="radio"/>
                    <span className="green-text text-darken-4">Woman</span>
                  </label>
                </div>
              </div>
              <div className = "col s10">
                <label htmlFor="Intensive">Physical Activity</label>
                <select id="Intensive" onChange={(e)=>this.setState({workoutTime:e.target.value})} value = {this.state.workoutTime} className="browser-default">
                    <option value="">How many times do you train</option>
                    <option value="1">Lack of physical activity</option>
                    <option value="1">1 Day a week</option>
                    <option value="2">2 Days a week</option>
                    <option value="3">3 Days a week</option>
                    <option value="4">4 Days a week</option>
                    <option value="5">5 Days a week</option>
                    <option value="7">Everyday</option>
                </select>
                <br/>
              </div>
              <br/>
        <button className="btn light-blue waves-effect waves-light right btn-large" type="submit" name="action">Submit
          <i className="material-icons right">send</i>
        </button>
        </form>
      </div>
      <div className="col s12">
      <table className="striped  centered">
        <thead>
          <tr>
              <th>Age</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Sex</th>
              <th>Workout</th>
              <th>You need</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.users.map(user=>
              <tr key={user.id}>
                <td>{user.age}</td>
                <td>{user.height} cm</td>
                <td>{user.weight} kg</td>
                <td>{user.sex}</td>
                <td>{user.workoutTime} per week</td>
                <td>{user.result} kcal</td>
                <td>
                <button onClick={(e)=>this.edit(user.id)} className="btn yellow darken-2 waves-effect waves-light" type="submit" name="action">
                  <i className="material-icons">edit</i>
                </button>
                </td>
                <td>
                <button onClick={(e)=>this.delete(user.id)} className="btn red darken-2 waves-effect waves-light" type="submit" name="action">
                  <i className="material-icons">delete</i>
                </button>
                </td>
              </tr>
              )
          }
          
        </tbody>
      </table>
      </div>
    </div>
    </div></div>
  );
  }
}

export default User;