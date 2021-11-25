import information from "../profileData/information"

const profileA7 = (state = information, action) => {
    console.log("==========profile_a7====",action,state)
    switch (action.type){
        case  'save':
            const newState = {
                name: action.name.newName,
                handle: "wangsiqi",
                profilePicture: "jose.png",
                bannerPicture: "https://www.tuxedo-cat.co.uk/wp-content/uploads/2016/12/shutterstock_529826206-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
                bio: action.info.bio,
                website: action.personalURL.web,
                location: action.loca.loca,
                dateOfBirth: action.birth.birthday,
                dateJoined: "11/2021",
                followingCount: 999,
                followersCount: 180,
                editSwitch : false
            }

            return newState;


        default:
            return state;
    }



}
export default profileA7