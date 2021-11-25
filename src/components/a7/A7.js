import { Route } from 'react-router-dom'
import Practice from './Practice'
import Build from './Build'
import ProfileScreen from './Challenge/ProfileScreen/ProfileScreen'
import EditProfile from './Challenge/ProfileScreen/EditProfile'
import React from 'react'
import HomeScreen from './Build/HomeScreen/HomeScreen'
import ExploreScreen from './Build/ExploreScreen/ExploreScreen'
import { combineReducers, createStore } from 'redux'
import tweets from '../a8/Build/reducer/tweets'
import profileA7 from './Challenge/profileReducer/profileA7'
import tweetsA7 from './Build/reducer/tweetsA7'
import who from '../../reducers/who'
import profileA8 from '../a8/Challenge/profileReducer/profileA8'
import { Provider } from 'react-redux'

const reducer = combineReducers({ profileA7, tweetsA7, who})
const store = createStore(reducer);
const A7 = () => {
    return(
        <Provider store={store}>
        <div>
            <Route path={["/a7", "/a7/practice"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a7/twitter">
                <Build/>
            </Route>
            <Route path="/a7/twitter/home" component={HomeScreen}/>
            <Route path="/a7/twitter/explore" component={ExploreScreen}/>
            <Route path="/a7/twitter/profile" component={ProfileScreen}/>
            <Route path="/a7/twitter/edit" component={EditProfile}/>

        </div>
        </Provider>
    )
}

export default A7;