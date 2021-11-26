import { Route } from 'react-router-dom'
import Practice from './Practice'
import Build from './Build'
import ProfileScreen from './Challenge/ProfileScreen/ProfileScreen'
import EditProfile from './Challenge/ProfileScreen/EditProfile'
import React from 'react'
import HomeScreen from './Build/HomeScreen/HomeScreen'
import ExploreScreen from './Build/ExploreScreen/ExploreScreen'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import tweets from './Build/reducer/tweets'
import profileA8 from './Challenge/profileReducer/profileA8'
import who from '../../reducers/who'

const reducer = combineReducers({tweets: tweets, profileA8, who})
const store = createStore(reducer);
const A8 = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a8/twitter">
                    <Build/>
                </Route>
                <Route path="/a8/twitter/home" component={HomeScreen}/>
                <Route path="/a8/twitter/explore" component={ExploreScreen}/>
                <Route path="/a8/twitter/profile" component={ProfileScreen}/>
                <Route path="/a8/twitter/edit" component={EditProfile}/>

            </div>
        </Provider>
    )
}

export default A8;