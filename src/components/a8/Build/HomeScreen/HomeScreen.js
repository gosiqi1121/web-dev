// import NavigationSideBar from "./NavigationSideBar/index";
import HomeComponent from "./HomeComponent.js";
import PostItemList from "./PostItem/PostItemList.js";
import NavigationSideBar from "../NavigationSideBar";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import WhatsHappening from "./WhatsHappening";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2" style={{"position": "relative"}}><NavigationSideBar active={"home"}/></div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">

                    <WhatsHappening/>
                    <PostItemList/>

            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"> <PostSummaryList title="What's happening"/></div>
        </div>
    );
};
export default HomeScreen;
