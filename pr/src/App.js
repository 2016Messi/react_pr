import React from 'react';
export default class App extends React.Component{
    render(){
        const store = this.props.store;
        const addGun = this.props.add;        
        const removeGun = this.props.remove;                
        const num =store.getState();
        
        return(
            <div>
                <h1>我这里有机枪{num}把</h1>  
                <button onClick={()=>{store.dispatch(addGun())}}>申请机枪</button>
                <button onClick={()=>{store.dispatch(removeGun())}}>扔一个机枪</button>
            </div>
        )
    }
}