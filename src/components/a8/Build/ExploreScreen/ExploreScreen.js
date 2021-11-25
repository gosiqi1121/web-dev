import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList";
import NavigationSideBar from "../NavigationSideBar";

const ExploreScreen = () => {
    return (
        <>
            <div className="row">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2"><NavigationSideBar active={"explore"}/></div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{position: "relative"}}><ExploreComponent/></div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"><WhoToFollowList/></div>
            </div>
        </>
    )
}
export default ExploreScreen;