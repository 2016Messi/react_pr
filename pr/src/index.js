
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { counter } from './react_redux';

import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

class Test extends React.Component{
    constructor(){
        super ();
    }

    render(){
        console.log(this.props);
    
        return(
              <div>测试组件{this.props.match.params.location}</div>
        )
    }
}


function Erying(){
    return (
        <h1>二营人多</h1>
    )
}
function Sanying(){
    return (
        <h1>三营最帅</h1>
    )
}
class Index extends React.Component {
    render() {
        return (

            <Provider store={store} >
                <BrowserRouter>
                <div>
                <ul>
                        <li>
                            <Link to='/'>一营</Link>
                        </li>
                        <li>
                            <Link to='/Erying'>二营</Link>

                        </li>
                        <li>
                            <Link to='/Sanying'>三营</Link>
                        </li>
                        <li>
                            <Link to='/Test'>测试</Link>
                        </li>
                    </ul>
                    <Switch>
                    <Route exact path="/" component={App}></Route>
                        
                    <Route path="/:location" component={Test}></Route>
                    <Route path="/:location" component={Test}></Route>
                    <Route path="/:location" component={Test}></Route>
                    </Switch>
 

                </div>

                </BrowserRouter>
            </Provider>


        )
    }
}

ReactDom.render(<Index />, document.getElementById('root'));




















// import { createStore } from 'redux';

// // 新建store
// // 通过reducer建立
// // 根据老的state和action 生成新的state
// function counter (state,action){
//     console.log(action);
//     console.log(state);    
//     switch(action.type){
//         case "cat" : return state+1;
//         case "dog" : return state-1;
//         default : return 10;        
//     };

//     return state;
// }

// // 新建 store
// const store = createStore(counter,0);
// const init = store.getState();
// console.log(init);
// function listener(){
//     const init = store.getState();    
//     console.log(init);
// }
// store.subscribe(listener);

// store.dispatch({type:"cat",text:2});
// store.dispatch({type:"cat"});
// store.dispatch({type:"dog"});
