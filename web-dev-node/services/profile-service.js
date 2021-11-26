let profile = require('../data/information.json');
module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        console.log(req)
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        console.log("************** req. body *************",req.body);
        const newProfile = [
            {

                "handle": "wangsiqi",
                "profilePicture": "jose.png",
                "bannerPicture": "https://www.tuxedo-cat.co.uk/wp-content/uploads/2016/12/shutterstock_529826206-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
                "website": "https://www.linkedin.com/in/siqi-wang-547ba7184/",
                "dateJoined": "10/2021",
                "followingCount": 312,
                "followersCount": 180,
                "editSwitch" : false,
                ...req.body,
            }
        ]

        console.log(newProfile);
        profile = newProfile;
        return res.json(profile);
    }
    app.post('/api/profile', updateCurrentProfile);
};