import React from "react";
import PostItem from "./PostItem";
import {useSelector} from "react-redux";

const selectAllTweets = (state) => state.tweets;
const PostItemList = () => {
    const tweets = useSelector(selectAllTweets);
    return (
     <ul className="list-group">
        {tweets.map(item => {
            return(
                <PostItem item={item}/>
            )
        }

        )}
     </ul>);
}
export default PostItemList;