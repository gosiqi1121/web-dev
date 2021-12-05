import NavigationSideBar from "../../Build/NavigationSideBar/index"
import ProfileList from './ProfileList'

const ProfileScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2" style={{ 'position': 'relative' }}>
                <NavigationSideBar active={'profile'}/>
            </div>
            <div className="col-10 col-md-10 col-lg-11 col-xl-10">
                <ProfileList/>
            </div>
        </div>
    );
}



export default ProfileScreen;

