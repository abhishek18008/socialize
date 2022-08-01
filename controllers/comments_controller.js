const Post=require('../models/posts');
const Comment=require('../models/comments');

module.exports.addcomment = function (req, res) {
    // Post.findById( function (err, post) {
    //     if(post) {
        Comment.create({
            content: req.body.comment,
            linkeduser: req.user_id,
            
        },function (err, comment) {
            if (err) {
                console.log(err, 'error aa gya bhai');
            }
            // post.comments.push(comment);
            // post.save();
            res.redirect('/');
        })
    // console.log(req.body.content);
}
