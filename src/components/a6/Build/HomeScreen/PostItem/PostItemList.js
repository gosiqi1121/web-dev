import item from "./items"
import PostItem from "./PostItem";
const PostItemList = () => {
    return (
     <ul className="list-group">
        {item.map(item => {
            return(
                <PostItem item={item}/>
            )
        }

        )}
     </ul>);
}
export default PostItemList;