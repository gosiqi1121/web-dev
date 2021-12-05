import React, { useEffect } from 'react'
import PostItem from "./PostItem";
import { useDispatch, useSelector } from 'react-redux'
import { findAllTweets } from '../../../services/twitterService'

const selectAllTweets = (state) => state.tweets;
const PostItemList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => findAllTweets(dispatch), [])
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