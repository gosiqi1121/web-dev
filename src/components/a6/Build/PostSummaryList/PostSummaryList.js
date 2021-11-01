import post from "./post";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    return (
        <div className="list-group">
            {post.map(post => {
                return(
                    <PostSummaryItem post={post}/>
                );
            })}
        </div>

    );
}
export default PostSummaryList;