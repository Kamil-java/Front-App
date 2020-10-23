import React from 'react';
import axios from "axios";
import ResultDiet from './dietComponents/ResultDiet';
import CollectionDiet from './dietComponents/CollectionDiets';
import Create from './dietComponents/Create';
import '../style/dietStyle.css';

class Diets extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      diets:[],
      newDiets:[],
      id:0,
      activ: false,
      diet: '',
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
        titleDiet: ''
      })

    })
  }
 
  initialize(){
    const M = window.M;
    M.AutoInit();
  }
  render(){
  return (
    <div className="back-diet">
      <div autoinit={this.initialize()} className="container">
        <div className="carousel carousel-slider">
          <span className="carousel-item " ><ResultDiet/></span>
          <span className="carousel-item" ><CollectionDiet/></span>
          <span className="carousel-item" ><Create/></span>
        </div>
      </div>
    </div>
  );
  }
}
  

export default Diets;