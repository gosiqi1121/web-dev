// const target = 'home';
// const controlActive = () =>{
//     // const id = $("#id");
//     if(this.id === target){
//         return (`active`);
//     }else{
//         return (``);
//     }
// }

const NavigationSidebar = (active) => {
    let flag1 = '';
    let flag2 = '';
    let flag3 = '';
    let flag4 = '';
    let flag5 = '';
    let flag6 = '';
    let flag7 = '';
    let flag8 = '';
    if(active === 'home'){
        flag1 = 'active';
    }else if(active === 'explore'){
        flag2 = 'active';
    }else if(active === 'notifications'){
        flag3 = 'active';
    }else if(active === 'messages'){
        flag4 = 'active';
    }else if(active === 'bookmarks'){
        flag5 = 'active';
    }else if(active === 'lists'){
        flag6 = 'active';
    }else if(active === 'profile'){
        flag7 = 'active';
    }else if(active === 'more'){
        flag8 = 'active';
    }
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <!-- continue the rest of the list -->
                <a class="list-group-item ${flag1}">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-lg-inline">Home</span>
                </a>
                <a class="list-group-item ${flag2}" href="../ExploreScreen/explore.html">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-lg-inline">Explore</span>
                </a>
                <a class="list-group-item ${flag3}">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-lg-inline">Notifications</span>
                </a>
                <a class="list-group-item ${flag4}">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-lg-inline">Messages</span>
                </a>
                <a class="list-group-item ${flag5}">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-lg-inline">Bookmarks</span>
                </a>
                <a class="list-group-item ${flag6}">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-lg-inline">Lists</span>
                </a>
                <a class="list-group-item ${flag7}">
                    <i class="fas fa-user-alt"></i>
                    <span class="d-none d-lg-inline">Profile</span>
                </a>
                <a class="list-group-item ${flag8}">
                    <i class="fas fa-ellipsis-h"></i>
                    <span class="d-none d-lg-inline">More</span>
                </a>
                <button type="button" class="btn btn-primary rounded-pill mt-2">Tweet</button>
            </div>         
    `);
}
export default NavigationSidebar;
