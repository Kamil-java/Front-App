import React, { Component } from 'react';

export class WorkoutBar extends Component {
    render() {
        return (
            <div> 
                 <ul className="tabs tabs-fixed-width tab-demo z-depth-1">
                    <li className="tab"><a href="#intens" className="deep-orange-text text-accent-4 active">Intensive Trening</a></li>
                    <li className="tab"><a href="#optimal" className="deep-orange-text text-accent-4">Optimal training</a></li>
                    <li className="tab "><a href="#create" className="deep-orange-text text-accent-4">Create your own training</a></li>
                </ul>
            </div>
        )
    }
}

export default WorkoutBar
