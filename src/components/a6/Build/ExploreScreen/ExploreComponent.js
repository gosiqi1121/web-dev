import PostSummaryList from "../PostSummaryList/PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">

               <nav className="navbar pt-0">
                    <div className="col-11">
                        <form className="input-group border rounded-pill p-1" style={{background:"#222"}}>
                            <span className="border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                            <input
                                    type="search"
                                    className="form-control border-0"
                                    placeholder="Search Twitter"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                    style={{background:"#222"}}

                            />
                        </form>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x ms-3 text-primary"></i>
                    </div>
                </nav>
           </div>
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-sm-inline">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>

            <div className="card text-white border-0">
                <img className="card-img mt-2"
                        src="https://www.looper.com/img/gallery/the-three-body-problem-netflix-release-date-cast-and-plot-what-we-know-so-far/intro-1599076911.jpg"/>
                <div className="card-img-overlay">
                    <h1 className="card-title position-absolute bottom-0 start-0 p-1">The Three Body Problem</h1>
                </div>
            </div>
           <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
