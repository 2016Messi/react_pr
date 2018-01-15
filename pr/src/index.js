
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Link, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import  combineReducers  from './reducer.js';
import Auth from './Auth.js';
import DashBoard from './DashBoard.js';


const store = createStore(combineReducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

class Test extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);

        return (
            <div>测试组件{this.props.match.params.location}</div>
        )
    }
}



class Index extends React.Component {
    render() {
        return (

            <Provider store={store} >
                <BrowserRouter>
                    <Switch>               
                        <Route exact path="/login" component={Auth}></Route>
                        <Route path="/dashBoard" component={DashBoard}></Route>
                        <Redirect path="/dashBoard" ></Redirect>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDom.render(<Index />, document.getElementById('root'));