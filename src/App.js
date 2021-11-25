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
import tweets from "./components/a8/Build/reducer/tweets";
import ProfileScreen from './components/a7/Challenge/ProfileScreen/ProfileScreen'
import profileA7 from './components/a7/Challenge/profileReducer/profileA7'
import EditProfile from './components/a7/Challenge/ProfileScreen/EditProfile'
import A6 from './components/a6/A6'
import A7 from './components/a7/A7'
import A8 from './components/a8/A8'
// import tweetsA7 from './components/a7/Build/reducer/tweetsA7'
// import profileA8 from './components/a8/Challenge/profileReducer/profileA8'


//const reducer = combineReducers({tweets: tweets, who, profile})
// const reducer = combineReducers({tweets: tweets, profileA7, tweetsA7, who, profileA8})
// const store = createStore(reducer);

function App() {
    return (
        // <Provider store={store}>
            <BrowserRouter>
                <div>
                    <li>
                    <Link to="/a6/practice">A6</Link> |
                    </li>
                    <li>
                    <Link to="/a7/practice">A7</Link> |
                    </li>
                    <li>
                    <Link to="/a8/practice">A8</Link> | <Link to="/a8/twitter/home">Build</Link>
                    </li>


                    <Route path="/a6">
                        <A6/>
                    </Route>

                    <Route path="/a7">
                        <A7/>
                    </Route>

                    <Route path="/a8">
                        <A8/>
                    </Route>
                </div>
            </BrowserRouter>
        // </Provider>
    );
}

export default App;
