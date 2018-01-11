import React from 'react';
import {addGUN} from './react_redux';
export default class App extends React.Component{
    render(){
        const store = this.props.store;
        const num =store.getState();
        return(
            <div>
                <h1>我这里有机枪{num}把</h1>  
                <button onClick={()=>{store.dispatch(addGUN())}}>申请机枪</button>
            </div>
        )
    }
}