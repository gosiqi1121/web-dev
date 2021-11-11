// import NavigationSideBar from "./NavigationSideBar/index";
import HomeComponent from "./HomeComponent.js";
import PostItemList from "./PostItem/PostItemList.js";
import NavigationSideBar from "../NavigationSideBar";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2"><NavigationSideBar active={"home"}/></div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"><PostItemList/></div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"> <HomeComponent/></div>
        </div>
    );
};
export default HomeScreen;
