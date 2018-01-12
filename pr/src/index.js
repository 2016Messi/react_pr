
import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { createStore, applyMiddleware, compose } from 'redux';
 
 
import  thunk  from 'redux-thunk'
import {counter, addGun, removeGun, addGunAsync} from './react_redux';
 

const reduxDevtools = window.devToolsExtension;


const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f
));
 
function render(){
    ReactDom.render(<App store={store} 
                         add = {addGun} 
                         remove = {removeGun}
                         addGunAsync = {addGunAsync}
                         />,document.getElementById('root'));
}
 
store.subscribe(render);
render();


























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
