import React from 'react';
import Create from './workoutComponents/Create';
import Optimal from './workoutComponents/Optimal';
import Intensive from './workoutComponents/Intensive';
import WorkoutBar from './workoutComponents/WorkoutBar';
import '../style/workoutStyle.css';

class Workout extends React.Component {
  
  componentDidMount(){
    const M = window.M;
    M.AutoInit();
  }
  render(){
  return ( 
    <div className="back-workout">
      <div className="container "> 
        <WorkoutBar/>
        <Intensive  id="intens" ></Intensive>
        <Optimal id="optimal"></Optimal>
        <Create id="create"></Create>
      </div>
    </div>
  );
  }
}

export default Workout;

