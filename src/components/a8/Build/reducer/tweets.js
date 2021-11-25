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
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar" : "https://toppng.com/uploads/preview/react-logo-icon-11609374122d9vkbptqap.png",
                "image": "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                "reply" : "123",
                "retweet": "234",
                "like": "345",
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
