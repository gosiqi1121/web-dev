import posts from "../data/items.json"
const  initialState = {
    tweets: posts
}
const tweets = (state = initialState, action) => {
    console.log("============switch a8====",action,state)
    switch (action.type) {

        case "create-tweet":
            const newTweet = {
                _id: (new Date()).getTime() + "",
                "topic": "Web Development",
                "userName": "New Tweet Sample",
                "verified": false,
                "handle": "NewTweetSample",
                "time": "3h",
                ...action.tweet,
                "avatar" : "https://pbs.twimg.com/profile_images/378800000256050912/5e92c2bc4bcca352b73a62bc1c626e11_400x400.jpeg",
                "image": "https://images.pexels.com/photos/1009355/pexels-photo-1009355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "reply" : "370",
                "retweet": "402",
                "like": "199",
                "liked": false,
            }
            let result= {
                tweets : [
                    newTweet,
                    ...state.tweets
                ]
            }

            return (result);
            break;

        case 'delete-tweet':
            let temp = {
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            }
            return (temp);
            break;

        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
            break;

        case 'like-tweet':
            return ({
                tweets: state.tweets.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.like--;
                        } else {
                            tweet.liked = true;
                            tweet.like++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            });
            break;;



        default:
            return (state)
    }

}

export default tweets
