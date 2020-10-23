import React, { Component } from 'react';
import '../style/homeStyle.css'

export class Home extends Component {
    componentDidMount(){
        const M = window.M;
            var elems = document.querySelectorAll('.slider');
            M.Slider.init(elems, {interval: 9000, indicators: false});
        
        
    }
    
    render() { 
        return (
          <div>
            <div className="full">
              <div className="slider">
                <ul className="slides">
                  <li className="full">
                    <div className="cover-str">
                      <div className="container">
                        <h2 className="white-text bold">Hi new user what would you say to get us started?</h2>
                      </div>
                    </div>
                  </li>
                  <li className="full">
                    <div className="cover-1">
                      <div className="caption center-align">
                        <h3 className="bold">Welcome to the app, they are waiting for you...</h3>
                        <h4 >It is an application to facilitate lifestyle improvement.</h4>
                      </div>
                    </div>
                  </li>
                  <li className="full">
                    <div className="cover-2">
                      <div className="caption left-align">
                        <h3 className="bold">For logged in users, we have current data related to Covid-19</h3>
                        <h4 >You can see if it's better to stay home or go to the gym or the city.</h4>
                        <h4 >So, what are you waiting for, create an account and use 100%.</h4>
                      </div>
                    </div>
                  </li>
                  <li className="full">
                    <div className="cover-3">
                      <div className="caption right-align">
                        <h3 className="bold">Calculate the need for calories</h3>
                        <h4 >Calculate for yourself and family or friends.</h4>
                        <h4 >The results become permanent so you can compare the results or check at any time without recounting.</h4>
                      </div>
                    </div>
                  </li>
                  <li className="full">
                    <div className="cover-4">
                      <div className="caption center-align">
                        <h3 className="bold">Choose or create your own diet</h3>
                        <h4 >You can choose the diet that suits your Kcal needs, choose from our database or create your own unique diet.</h4>
                      </div>
                    </div>
                  </li>
                  <li className="full">
                    <div className="cover-5">
                      <div className="caption center-align">
                        <h3 className="bold">Plan a training session with us, doesn't matter if it is intensive, strenght training or create your own training.</h3>
                        <h4 >We provide a set of training sessions, both intense and strenght.</h4>
                        <h4 >You can create your own unique workout.</h4>
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

export default Home
