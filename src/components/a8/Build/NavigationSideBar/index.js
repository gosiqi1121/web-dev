import React from "react";
import {Link} from "react-router-dom";
const NavigationSideBar = ({active = 'home'}) => {
    return(
            <div className="list-group">
                <Link to="/a8/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/a8/twitter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>
                <Link to="/a8/twitter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-lg-inline">Explore</span>
                </Link>




                <a className="list-group-item">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-lg-inline">Notifications</span>
                </a>
                <a className="list-group-item">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-lg-inline">Messages</span>
                </a>
                <a className="list-group-item">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-lg-inline">Bookmarks</span>
                </a>
                <a className="list-group-item">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-lg-inline">Lists</span>
                </a>


                <Link to="/a8/twitter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fas fa-user-alt"></i>
                    <span className="d-none d-lg-inline">Profile</span>
                </Link>




                <a className="list-group-item">
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="d-none d-lg-inline">More</span>
                </a>
                <button type="button" className="btn btn-primary rounded-pill mt-2">Tweet</button>
            </div>         
    );
}
export default NavigationSideBar;
