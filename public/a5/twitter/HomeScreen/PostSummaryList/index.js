import exploreItems from "./post.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () =>{
    return (`
            <div class="list-group">${exploreItems.map(PostSummaryItem).join("")}</div>
                
    `);
}
export default PostSummaryList;