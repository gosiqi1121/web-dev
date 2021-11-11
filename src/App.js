import logo from './logo.svg';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap/bootstrap.min.css';
import './vendor/bootstrap/fontawesome/css/all.min.css'
// import '/Users/sunarke/Desktop/2021/fall/webdev/web-dev/public/images'
import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
import Build from "./components/a7/Build"
import Practice from "./components/a7/Practice"
import { BrowserRouter, Link, Route } from 'react-router-dom'
import HomeScreen from "./components/a7/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";
import {combineReducers, createStore} from "redux";
import who from "./reducers/who";
import {Provider} from "react-redux";
import React from "react";
import tweets from "./components/a7/Build/reducer/tweets";
import ProfileScreen from './components/a7/Challenge/ProfileScreen/ProfileScreen'
import profile from './components/a7/Challenge/profileReducer/profile'
import EditProfile from './components/a7/Challenge/ProfileScreen/EditProfile'
import A6 from './components/a6/A6'
import A7 from './components/a7/A7'


const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <li>
                    <Link to="/a6/practice">A6</Link> |
                    </li>
                    <li>
                    <Link to="/a7/practice">A7</Link> |
                    </li>

                    <Route path="/a6">
                        <A6/>
                    </Route>

                    <Route path="/a7">
                        <A7/>
                    </Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
