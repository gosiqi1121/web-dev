import NavigationSidebar from "./NavigationSidebar/NavigationSidebar.js";
import HomeComponent from "./HomeComponent.js";
import PostItemList from "./PostItem/PostItemList.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row">
            <div class="col-2">${NavigationSidebar('home')}</div>
            <div class="col-6">${PostItemList()}</div>
            <div class="col-4"> ${HomeComponent()}</div>
        </div>
    `);
})($);

/**
 * <div class="row mt-2">
 <div class="col-2 col-md-2 col-lg-1 col-xl-2">
 ${NavigationSidebar()}
 </div>
 <div className="col-10 col-md-10 col-lg-7 col-xl-6">
 ${PostItemList()}
 </div>
 <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
 ${HomeComponent()}
 </div>

 </div>
 * */