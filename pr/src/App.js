import React  from 'react';
import { connect } from 'react-redux'
import {  removeGun, addGunAsync, addGun } from './react_redux';
@connect( state =>  ({num : state}),
    {addGun, removeGun, addGunAsync}
)


class App extends React.Component{
    render(){
                              
        
        return(
            <div>
                <h1>我这里有机枪{this.props.num}把</h1>  
                <button onClick={this.props.addGun}>申请机枪</button>
                <button onClick={this.props.removeGun}>扔一个机枪</button>
                <button onClick={this.props.addGunAsync}>过几天给你把枪</button>                
            </div>
        )
    }
} 

 
export default App;


