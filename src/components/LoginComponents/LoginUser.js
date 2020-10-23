import React, { Component } from 'react';
import './position.css';



export class LoginUser extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="row center-input">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row center-input">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">vpn_key</i>
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="btn-radius waves-effect waves-light btn-large"><i className="material-icons right" type="submit">send</i>Log in</button>
                </form>
            </div>
        )
    }
}

export default LoginUser

