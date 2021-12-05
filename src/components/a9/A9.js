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
import profileA9 from './Challenge/profileReducer/profileA9'
import who from '../../reducers/who'

const reducer = combineReducers({tweets: tweets, profileA9, who})
const store = createStore(reducer);
const A9 = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/a9", "/a9/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a9/twitter">
                    <Build/>
                </Route>
                <Route path="/a9/twitter/home" component={HomeScreen}/>
                <Route path="/a9/twitter/explore" component={ExploreScreen}/>
                <Route path="/a9/twitter/profile" component={ProfileScreen}/>
                <Route path="/a9/twitter/edit" component={EditProfile}/>

            </div>
        </Provider>
    )
}

export default A9;