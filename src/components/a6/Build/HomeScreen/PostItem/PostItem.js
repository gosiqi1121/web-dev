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
const PostItem = ({item = {
    "avatar": "https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg",
    "userName" : "Elon Musk",
    "handle" : "elonmusk",
    "time": "23h",
    "post" : "Amazing show about @Inspiration4x mission!",
    "image": "https://images.pexels.com/photos/23763/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "content" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
    "reply" : "4.2k",
    "retweet": "3.5k",
    "like": "37.5"

}}) => {
    return (
    <li className="list-group-item">
        <div className="row">
            <div className="col-1">
                <img className="img-fluid rounded-circle" src={item.avatar}/>
            </div>
            <div className="col-11">
                <div>
                    <span className="fw-bold">{item.userName}</span>
                    <i className="fa-solid fa-badge-check"></i>
                    <span className="text-secondary"> @{item.handle} - {item.time}</span>
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
                    <div className="col-3">
                        <i className="far fa-heart"></i>
                        {item.like}
                    </div>
                    <div className="col-3">
                        <i className="far fa-share-square"></i>
                        
                    </div>
                </div>
            </div>
        </div>
    </li>
    );
}
export default PostItem;