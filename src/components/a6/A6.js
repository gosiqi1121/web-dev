import Practice from './Practice'
import { Route } from 'react-router-dom'
import Build from './Build'

import React from 'react'
import HomeScreen from './Build/HomeScreen/HomeScreen'
import ExploreScreen from './Build/ExploreScreen/ExploreScreen'
import HelloWorld from './HelloWorld'

const A6 = () => {
    return(
        <div>
            <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a6/twitter">
                <Build/>
            </Route>
            <Route path="/a6/hello" exact={true}>
                <HelloWorld/>
            </Route>
            <Route path="/a6/twitter/home" component={HomeScreen}/>
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>
        </div>
    )
}
export default A6