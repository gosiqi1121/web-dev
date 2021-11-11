import { useSelector } from 'react-redux'

import React from 'react'
import ProfileComponent from './ProfileComponent'
import information from '../profileData/information'


// const selectAllProfiles = (state) => state.profile;
const ProfileList = () => {
    // const profile = useSelector(selectAllProfiles);
    return(
        <div>
            <ProfileComponent/>
        </div>
    );
}
export default ProfileList;

