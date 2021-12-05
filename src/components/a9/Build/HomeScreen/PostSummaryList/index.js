import exploreItems from "./post.json";
import PostSummaryItem from "./PostSummaryItem.js";
import React from 'react'
const PostSummaryList = () =>{
    return (
            <ul className="list-group">
                {/*<li className="list-group-item">*/}
                {/*    What`s happening ...*/}
                {/*</li>*/}
                {exploreItems.map(exploreItems => {
                    return(
                        <PostSummaryItem post={exploreItems}/>
                    )
                })
                }

            </ul>
                
    );
}
export default PostSummaryList;