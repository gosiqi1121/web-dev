import exploreItems from "./post.json";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () =>{
    return (
            <div className="list-group">
                {exploreItems.map(exploreItems => {
                    return(
                        <PostSummaryItem post={exploreItems}/>
                    )
                })
                }

            </div>
                
    );
}
export default PostSummaryList;