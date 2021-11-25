// import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {createStore} from "redux";
import {Provider} from "react-redux";
import who from "../../../reducers/who";



const Build = () => {
    return (

            <div>
                {/*<Route path={["/", "a7/twitter/home"]} exact={true} component={HomeScreen}/>*/}
                {/*<Route path="/a7/twitter/explore" exact={true} component={ExploreScreen}/>*/}
            </div>

    )
};

export default Build;
