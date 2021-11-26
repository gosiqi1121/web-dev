

import { Link } from 'react-router-dom'
// import information from '../profileData/information'
import { useDispatch, useSelector } from 'react-redux'
import profileA8 from '../profileReducer/profileA8'
import { useEffect } from 'react'
import { fetchCurrentProfile } from '../../../../services/profileService'



const ProfileComponent = () => {
    const information = useSelector(state => state.profileA8)
    const dispatch = useDispatch();
    useEffect(() => fetchCurrentProfile(dispatch), [])
    return (
        <>
            <div className="row">
                <div className="col-1 d-flex align-items-center justify-content-center">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="col-11">
                    <div style={{ fontSize: '20px' }}>
                        {information.name}
                    </div>

                    <div style={{color: '#282c34'}}>
                        5,169 Tweets
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/3036364/pexels-photo-3036364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    height="219px" width="100%" style={{ objectFit: 'cover' }}/>

            </div>
            <div className="row">
                <div className="col ms-2" style={{position:'relative'}}>

                    <img
                        src="https://pbs.twimg.com/profile_images/378800000256050912/5e92c2bc4bcca352b73a62bc1c626e11_400x400.jpeg"
                        className="rounded-circle"
                        height="150px"
                        style={{ position: 'relative',  border: '#060606 solid 5px', marginTop: "-75px"}}
                        alt="profile picture"
                    />


                    <div >
                        <span style={{ fontSize: '24px', fontWeight: "bold" }}>
                            {information.name}
                        </span>
                        <br/>
                        <span style={{color: '#282c34'}}>
                            @{information.handle}
                        </span>
                    </div>


                </div>

                <div className="col">
                <Link to="/a8/twitter/edit">
                    <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white">
                        Edit Profile
                    </button>
                </Link>

                </div>
            </div>
            <div className="ms-2">
                <div>
                    {information.bio}
                </div>
                <div className="row" style={{color: '#282c34'}}>
                    <div className="col-3 ">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="p-2">{information.location}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-birthday-cake"></i>
                        <span className="p-2">Born {information.dateOfBirth}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="p-2">Joined {information.dateJoined}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <span className="fw-bold text-white">{information.followingCount}</span>
                        <span style={{color: '#282c34'}} className="p-2">Following</span>
                    </div>
                    <div className="col-2">
                        <span className="fw-bold text-white">{information.followersCount}</span>
                        <span style={{color: '#282c34'}} className="p-2">Followers</span>
                    </div>
                </div>
            </div>



        </>
    )
}
export default ProfileComponent

