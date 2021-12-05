const TWEET_API = 'http://localhost:4000/a9/tweets';

export const findAllTweets = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets => {
                dispatch({
                    type: 'fetch-all-tweets',
                    tweets
                })
            }
        );

export const createTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );
export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => {

        dispatch({
            type: 'delete-tweet',
            tweet
        })
    });

export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));

export default {
    findAllTweets, deleteTweet, likeTweet, createTweet
};
