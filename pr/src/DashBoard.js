import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import App from './app';
import { connect } from 'react-redux';
import { logout,login } from './Auth.redux'

function Erying() {
    return (
        <h1>二营人多</h1>
    )
}
function Sanying() {
    return (
        <h1>三营最帅</h1>
    )
}
@connect(state => (state.auth),
    { logout,login }
)
export default class DashBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.match)
        const logApp = (
            <div>
                <button onClick={this.props.logout} >注销</button>
                <ul>
                    <li>
                        <Link to='/dashBoard/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/dashBoard/Erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/dashBoard/Sanying'>三营</Link>
                    </li>
                </ul>
                <Route exact path="/dashBoard/" component={App}></Route>
                <Route path="/dashBoard/Erying" component={Erying}></Route>
                <Route path='/dashBoard/Sanying' component={Sanying}></Route>
            </div>)
        const logif = this.props.isAuth ? logApp :
        <Redirect to="/login"></Redirect>            ; 

        return (
            <div>
                { logif }
            </div>
        )
    }
}