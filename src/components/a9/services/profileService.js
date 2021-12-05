// const PROFILE_API = 'https://node-on-heroku-1124.herokuapp.com/api/profile';
// const PROFILE_API = 'http://127.0.0.1:4000/api/profile';
const PROFILE_API = 'http://localhost:4000/a9/profile';

export const fetchCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile => {
                return dispatch({
                    type: 'fetch-profile',
                    profile
                })
            }
        );
export const updateCurrentProfile = (dispatch, newOwner) => {
    console.log('newOwner: ',newOwner);
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(newOwner),
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response =>
             response.json()
        )
};
