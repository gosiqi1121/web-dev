const cardBody = (item) => {
    if(item.title === ''){
        return (``)
    }
    else{
        return (`<div class="card-body">
                        <div class="card-title">
                            ${item.title}
                        </div>
                        <div class="card-text text-secondary">
                            ${item.content}
                        </div>
                 </div>
        `)
    }
}
const postItem = (item) => {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-1">
                <img class="img-fluid rounded-circle" src="${item.avatar}"/>
            </div>
            <div class="col-11">
                <div>
                    <span class="fw-bold">${item.userName}</span>
                    <i class="fa-solid fa-badge-check"></i>
                    <span class="text-secondary"> @${item.handle} - ${item.time}</span>
                </div>
                <div>${item.post}</div>
                <div class="card border-secondary mt-2">
                    <img class="rounded-3 img-fluid card-img-top " src="${item.image}">
                    ${cardBody(item)}  
                </div>
                <div class="row mt-3">
                    <div class="col-3">
                        <i class="far fa-comment"></i>
                        ${item.reply}
                    </div>
                    <div class="col-3">
                        <i class="fas fa-retweet "></i>
                        ${item.retweet}
                    </div>
                    <div class="col-3">
                        <i class="far fa-heart"></i>
                        ${item.like}
                    </div>
                    <div class="col-3">
                        <i class="far fa-share-square"></i>
                        
                    </div>
                </div>
            </div>
        </div>
    </li>
    `);
}
export default postItem;