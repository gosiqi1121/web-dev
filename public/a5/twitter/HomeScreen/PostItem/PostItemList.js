import item from "./items.js"
import postItem from "./PostItem.js";
const PostItemList = () => {
    return (`
     <ul class="list-group">
        ${item.map(postItem).join('')} 
     </ul>`);
}
export default PostItemList;