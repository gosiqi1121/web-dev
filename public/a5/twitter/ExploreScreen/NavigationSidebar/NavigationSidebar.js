const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <!-- continue the rest of the list -->
                <a class="list-group-item" href="../HomeScreen/home.html">
                    <i class="fas fa-home"></i>
                    <span class="d-none d-lg-inline">Home</span>
                </a>
                <a class="list-group-item active">
                    <i class="fas fa-hashtag"></i>
                    <span class="d-none d-lg-inline">Explore</span>
                </a>
                <a class="list-group-item">
                    <i class="fas fa-bell"></i>
                    <span class="d-none d-lg-inline">Notifications</span>
                </a>
                <a class="list-group-item">
                    <i class="fas fa-envelope"></i>
                    <span class="d-none d-lg-inline">Messages</span>
                </a>
                <a class="list-group-item">
                    <i class="fas fa-bookmark"></i>
                    <span class="d-none d-lg-inline">Bookmarks</span>
                </a>
                <a class="list-group-item">
                    <i class="fas fa-list"></i>
                    <span class="d-none d-lg-inline">Lists</span>
                </a>
                <a class="list-group-item">
                    <i class="fas fa-user-alt"></i>
                    <span class="d-none d-lg-inline">Profile</span>
                </a>
                <a class="list-group-item">
                    <i class="fas fa-ellipsis-h"></i>
                    <span class="d-none d-lg-inline">More</span>
                </a>
                <button type="button" class="btn btn-primary rounded-pill mt-2">Tweet</button>
            </div>         
    `);
}
export default NavigationSidebar;
