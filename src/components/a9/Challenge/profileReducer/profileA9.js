import information from '../profileData/information'

const profileA9 = (state = information, action) => {
    switch (action.type) {
        case  'fetch-profile':
            return action.profile[0]
        case  'save':
            return action.profile[0]

        default:
            return state
    }

}
export default profileA9