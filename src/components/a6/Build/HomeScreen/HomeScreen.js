// import NavigationSideBar from "./NavigationSideBar/index";
import HomeComponent from "./HomeComponent.js";
import PostItemList from "./PostItem/PostItemList.js";
import NavigationSideBar from "../NavigationSideBar";

const HomeScreen = () => {
    return(
        <div class="row">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2"><NavigationSideBar active={"home"}/></div>
            <div class="col-10 col-md-10 col-lg-7 col-xl-6"><PostItemList/></div>
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"> <HomeComponent/></div>
        </div>
    );
};
export default HomeScreen;
