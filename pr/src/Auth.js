import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './Auth.redux'

@connect(state=>(state.auth),
    {login}
)

 class Auth extends React.Component{
    constructor(props){
        super(props);
    } 
    render(){
        return(
            
            <div>
                {this.props.isAuth ? <Redirect to="/dashBoard"></Redirect>:null}
                <h1>不好意思您好没有登陆，请先登陆</h1>    
                <button onClick={this.props.login}>登陆</button>
            </div>
        )  
    }
}
export default Auth;