const Post = require('../models/posts');

// User.findById(local.User._id, function (err, docs) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Result : ", docs);
//     }
// })

module.exports.home = function (req, res) {
    // Post.find({},function (err , posts) {
    //     return res.render('home', {
    //         title: "Home",
    //         post:posts,
    // })}

    Post.find({}).populate('user').exec(function (err, post) {
        return res.render('home', {
            title: "Home",
            post: post,
        })


    });
}


// module.exports.actionName = function(req, res)