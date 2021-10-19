
const WhoToFollowListItem = (who) => {
    return (`
<li class="list-group-item">
    <div class="row">
         <div class="col-2">
            <img class="img-fluid rounded-circle"
            src="${who.avatarIcon}"
            />
         </div>
         <div class="col-7">
            <div><span class="fw-bold">${who.userName}</span>
                <i class="fa fa-check-circle" aria-hidden="true"></i>
            </div>
            <div class="text-secondary">
                @${who.handle}
            </div>
         </div>
         <div class="col-3 align-middle p-0">
            <button
                    class="btn btn-primary
                    rounded-pill align-middle mt-2"
                    type="button">Follow
            </button>
         </div>
 </div>
</li>
`)
}
export default WhoToFollowListItem;