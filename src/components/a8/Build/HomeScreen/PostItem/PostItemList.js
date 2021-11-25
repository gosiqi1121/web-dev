import React, { useEffect } from 'react'
import PostItem from "./PostItem";
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTweets } from '../../../../../services/twitterService'

const selectAllTweets = (state) => state.tweets;
const PostItemList = () => {
    console.log("====a8 postitemlist===")
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
    console.log("=====postitemlist after fetch ====",tweets)
    console.log("===typeof tweets is :",typeof(tweets))
    return (
     <ul className="list-group">
        {tweets.tweets.map(item => {
            return(
                <PostItem item={item}/>

            )
        }

        )}
     </ul>);
}
export default PostItemList;