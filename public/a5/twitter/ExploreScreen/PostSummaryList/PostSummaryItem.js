const PostSummaryItem = (post) => {
    return (`
        <div class="list-group-item pt-1 pb-1 m-0 ">
                    <div class="row">
                        <div class="col-10">
                        <div class="row">
                            <span class="text-secondary">${post.topic === '' ? '' : post.topic}</span>
                        </div>
                        <div>
                            <span class="fw-bold">${post.userName}</span>
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <span class="text-secondary"> - ${post.time}</span>
                        </div>
                        <div class="fw-bold justify-content-between">
                            ${post.title}
                        </div>
                        </div>
                        <div class="col-2">
                            <img class="img-fluid" src="${post.image}">
                        </div>
                    </div>
                    
                    <div>
                            <span class="text-secondary">${post.tweets === undefined ? ' ' : post.tweets} Tweets</span>
                    </div>
        </div>
    `);
};
export default PostSummaryItem;