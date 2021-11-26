import information from "../profileData/information"

const profileA8 = (state = information, action) => {
    switch (action.type){
        case  'save':

            console.log("********* fetch reducer save 1 *****************", action.profile)
            // const newState = [{
            //     name: action.profile[0].name,
            //     handle: "wangsiqi",
            //     profilePicture: "jose.png",
            //     bannerPicture: "https://www.tuxedo-cat.co.uk/wp-content/uploads/2016/12/shutterstock_529826206-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
            //     bio: action.profile[0].bio,
            //     website: action.profile[0].website,
            //     location: action.profile[0].location,
            //     dateOfBirth: action.profile[0].dateOfBirth,
            //     dateJoined: "11/2021",
            //     followingCount: 999,
            //     followersCount: 180,
            //     editSwitch : false
            // }]

            console.log("********* fetch reducer save 2 *****************", action.profile)
            return action.profile;
            // return newState;

        case  'fetch-profile':
            console.log("********* fetch reducer fetch *****************", action.profile)
            return(
                action.profile
            )

        default:
            return state;
    }



}
export default profileA8