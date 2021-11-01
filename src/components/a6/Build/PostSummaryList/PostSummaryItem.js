const PostSummaryItem = ({post = {
    "topic":"Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title" : "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image" : "https://cdn.worldvectorlogo.com/logos/react-2.svg"
}
}) => {
    return (
        <div className="list-group-item pt-1 pb-1 m-0 ">
                    <div className="row">
                        <div className="col-10">
                        <div className="row">
                            <span className="text-secondary">{post.topic === '' ? '' : post.topic}</span>
                        </div>
                        <div>
                            <span className="fw-bold">{post.userName}</span>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <span className="text-secondary"> - {post.time}</span>
                        </div>
                        <div className="fw-bold justify-content-between">
                            {post.title}
                        </div>
                        </div>
                        <div className="col-2">
                            <img className="img-fluid" src={post.image} alt=""/>
                        </div>
                    </div>

                    <div>
                            <span className="text-secondary">{post.tweets === undefined ? ' ' : post.tweets} Tweets</span>
                    </div>
        </div>
    );
};
export default PostSummaryItem;