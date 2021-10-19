import PostSummaryList from "./PostSummaryList/index.js"
const ExploreComponent = () => {
    return(`
            <div class="row">
               <!-- search field and cog -->
               <nav class="navbar pt-0">
                    <div class="col-11">
                        <form class="input-group border rounded-pill p-1">
                            <span class="border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                            <input
                                    type="search"
                                    class="form-control border-0"
                                    placeholder="Search Twitter"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                            />
                        </form>
                    </div>
                    <div class="col-1">
                        <i class="fas fa-cog fa-2x ms-3 text-primary"></i>
                    </div>
                </nav>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-inline">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
            <div class="card text-white border-0">
                <img class="card-img mt-2"
                        src="https://www.looper.com/img/gallery/the-three-body-problem-netflix-release-date-cast-and-plot-what-we-know-so-far/intro-1599076911.jpg">
                <div class="card-img-overlay">
                    <h1 class="card-title position-absolute bottom-0 start-0 p-1">The Three Body Problem</h1>
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
