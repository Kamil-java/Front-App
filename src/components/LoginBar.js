import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style/logo.css';

export class LoginBar extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            M.Dropdown.init(elems, {});
          });
    }
    render() {
        return (
            <div>
                <button className='dropdown-trigger btn-large waves-effect waves-light blue-grey darken-4 right btn-drop ' data-target='loginMenu'><i className="material-icons center">account_circle</i></button>
                <ul id='loginMenu' className='dropdown-content'>
                    <Link to="/login" className="black-text">Sign in</Link>
                    <Link to="signIn" className="black-text">Sing up</Link>
                </ul>
            </div>
        )
    }
}

export default LoginBar
