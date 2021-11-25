import NavigationSideBar from '../../Build/NavigationSideBar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentProfile } from '../../../../services/profileService'


const EditProfile = () => {
    const information = useSelector(state => state.profileA8)

    let [name, setName] = useState({newName: information.name})
    let [info, setInfo] = useState({bio: information.bio})
    let [loca, setLoca] = useState({loca: information.location})
    let [personalURL, setPersonalURL] = useState({web : information.website})
    let [birth, setBirth] = useState({birthday: information.dateOfBirth});

    const dispatch = useDispatch()

    const nameChangeHandler = (e) => {
        const name = e.target.value;
        const newName = {newName : name};
        setName(newName);
    }
    const bioChangeHandler = (e) => {
        const bio = e.target.value;
        const newInfo = {
            bio : bio
        };
        setInfo(newInfo);
    }

    const locationChangeHandler = (e) => {
        const location = e.target.value;
        const newLoca = {loca : location}
        setLoca(newLoca);
    }

    const websiteChangeHandler = (e) => {
        const web = e.target.value;
        const newWeb = {web : web}
        setPersonalURL(newWeb);
    }

    const birthChangeHandler = (e) => {
        const birthday = e.target.value;
        const newBirth = {birthday : birthday}
        setBirth(newBirth);
    }

    const saveClickHandler = () => {
        // dispatch({type: 'save', info, loca, personalURL, name, birth})

        updateCurrentProfile(dispatch, {
            bio : info.bio,
            location: loca.loca,
            website: personalURL.web,
            name: name.newName,
            dateOfBirth: birth.birthday
        });
    }
    return (

        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2" style={{ 'position': 'relative' }}>
                    <NavigationSideBar active={'profile'}/>
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10">
                    <div className="row">
                        <div className="col-1 d-flex align-items-center justify-content-center">

                            <Link to="/a7/twitter/profile">
                                <i className="fas fa-times"></i>
                            </Link>

                        </div>
                        <div className="col-10">
                            <div style={{ fontSize: '20px' }}>
                                Edit Profile
                            </div>

                        </div>
                        <div className="col-1">
                            <Link to="/a8/twitter/profile">
                                <button className="btn btn-light rounded-pill bg-white me-2 float-end"
                                onClick={saveClickHandler}>
                                    <span className="fw-bold text-black">Save</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/3036364/pexels-photo-3036364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            height="219px" width="100%" style={{ objectFit: 'cover' }}/>

                    </div>
                    <div className="ms-2">
                        <div>
                            <img
                                src="https://pbs.twimg.com/profile_images/378800000256050912/5e92c2bc4bcca352b73a62bc1c626e11_400x400.jpeg"
                                className="rounded-circle"
                                height="150px"
                                style={{ position: 'relative', border: '#060606 solid 5px', marginTop: '-75px' }}
                                alt="profile picture"
                            />
                        </div>

                        <div className="mt-2">
                            <label for="name">Name</label>
                            <textarea className="bg-black text-white " id="name" style={{width:"100%"}}
                                        value = {name.newName} onChange={nameChangeHandler}>
                                {information[0].name}
                            </textarea>
                            </div>
                        <div className="mt-2 ">
                            <label for="bio">Bio</label>
                            <textarea className="bg-black text-white" name='bio' style={{width:"100%"}}
                                      value={info.bio} onChange={bioChangeHandler}>
                                {information[0].bio}
                            </textarea>
                        </div>
                        <div className="mt-2">
                            <label for="location">Location</label>
                            <textarea className="bg-black text-white"  name="location" style={{width:"100%"}}
                                        value={loca.loca} onChange={locationChangeHandler}>
                                {information[0].location}
                            </textarea>
                        </div>
                        <div className="mt-2">
                            <label for="website">Website</label>
                            <textarea className="bg-black text-white" name="website" style={{width:"100%"}}
                                        value={personalURL.page} onChange={websiteChangeHandler}>
                                {information[0].website}
                            </textarea>
                        </div>
                        <div>
                            <div>
                            <span>Birth date - </span>
                            <label for="birthday" className="text-primary">Edit</label>
                            </div>
                            <div>

                                <input id="birthday" type="date" className="bg-light text-white"
                                       value={information[0].birthday}  onChange = {birthChangeHandler}

                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default EditProfile