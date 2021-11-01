const WhoToFollowListItem = ({who = {
    avatarIcon: 'https://wpcdn.us-east-1.vip.tn-cloud.net/www.yaktrinews.com/content/uploads/2020/04/e570ea2060253597bf76bb9df2527060-1024x576.jpg',
    userName: 'NASA',
    handle: 'NASA'
}}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="float-start rounded-circle" width="48" height="48"
                         src={who.avatarIcon} alt=""
                     />
                </div>
                <div className="col-7">
                    <div><span className="fw-bold">{who.userName}</span>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <div className="text-secondary">
                        @{who.handle}
                    </div>
                </div>
                <div className="col-3 align-middle p-0">
                    <button
                        className="btn btn-primary
                    rounded-pill align-middle mt-2"
                        type="button">Follow
                    </button>
                </div>
            </div>
        </li>
    )
}
export default WhoToFollowListItem;