import { useDispatch } from 'react-redux'
import { deleteTweet, likeTweet } from '../../../services/twitterService'
import React from 'react'

const cardBody = (item) => {
    if(item.title === ''){
        return (<></>)
    }
    else{
        return (<div className="card-body">
                        <div className="card-title">
                            {item.title}
                        </div>
                        <div className="card-text text-secondary">
                            {item.content}
                        </div>
                 </div>
        )
    }
}
const PostItem = ({item}) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        deleteTweet(dispatch, item);
    };

    const likeClickHandler = () => {
        likeTweet(dispatch, item);
    };


    return (
    <li className="list-group-item" key={item._id} style={{paddingLeft: 0}}>


        <table style={{marginBottom: '16px'}}>
            <tbody>
            <tr>
                <td style={{verticalAlign: 'top'}}>
                    <img src={item.avatar}
                         className="rounded-circle"
                         style={{width: '48px', margin: '16px'}}/>
                </td>
                <td style={{width: "100%"}}>
                    <div>
                        <span className="fw-bold">{item.userName}</span>
                        <i className="fa-solid fa-badge-check"></i>
                        <span className="text-secondary"> @{item.handle} - {item.time}</span>


                        <i onClick={deleteTweetClickHandler}
                           className="fas fa-times fa-pull-right"></i>

                    </div>
                    <div>{item.post}</div>
                    <div className="card border-secondary mt-2">
                        <img className="rounded-3 img-fluid card-img-top " src={item.image}/>
                        {cardBody(item)}
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <i className="far fa-comment"></i>
                            {item.reply}
                        </div>
                        <div className="col-3">
                            <i className="fas fa-retweet "></i>
                            {item.retweet}
                        </div>
                        <div className="col-3" onClick={likeClickHandler}> {
                            item.liked && <i className="far fa-heart"
                                             style={{color: item.liked ? "red" : "white"}}></i>
                        }{
                            !item.liked && <i className="far fa-heart"></i>
                        }
                            {item.like}
                        </div>
                        <div className="col-3">
                            <i className="far fa-share-square"></i>

                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </li>
    );
}
export default PostItem;