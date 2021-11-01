import logo from './logo.svg';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap/bootstrap.min.css';
import './vendor/bootstrap/fontawesome/css/all.min.css'
// import '/Users/sunarke/Desktop/2021/fall/webdev/web-dev/public/images'
import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
import Build from "./components/a6/Build"
import Practice from "./components/a6/Practice"
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>

                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <Practice/>
                </Route>

                <Route path="/a6/build" exact={true}>
                    <Build/>
                </Route>
                <Route path="/a6/twitter/home" component={HomeScreen}/>
                <Route path="/a6/twitter/explore" component={ExploreScreen}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
