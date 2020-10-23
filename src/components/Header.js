import React from 'react';
import {Link} from 'react-router-dom';
import LoginBar from './LoginBar';
import '../style/logo.css'

export default function Header() {
    return (
        <div>
            <nav className="green darken-4">
              <div className="nav-wrapper">
                <div>
                  <Link to='/'><div className="left waves-effect waves-light spacing-adv hoverable white-text">Home</div></Link>
                  <Link to='/user'><div className="left waves-effect waves-light spacing-adv hoverable ">Kcal Calc</div></Link>
                  <LoginBar/>
                  <Link to='/workout'><div className="right waves-effect waves-light spacing-adv hoverable ">Workouts</div></Link>
                  <Link to='/diets'><div className="right waves-effect waves-light spacing-adv hoverable ">Diet</div></Link>
                </div>
              </div>
            </nav>
        </div>
    )
}
