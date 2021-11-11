import { Route } from 'react-router-dom'
import Practice from './Practice'
import Build from './Build'
import ProfileScreen from './Challenge/ProfileScreen/ProfileScreen'
import EditProfile from './Challenge/ProfileScreen/EditProfile'
import React from 'react'
import HomeScreen from './Build/HomeScreen/HomeScreen'
import ExploreScreen from './Build/ExploreScreen/ExploreScreen'


const A7 = () => {
    return(
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
    )
}

export default A7;