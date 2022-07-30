const Post=require('../models/posts')

module.exports.create=function (req,res) {
    Post.create({
        content:req.body.content,
        user:req.user._id
        
    },
    
    function name(err ,post) {
        if (err) {
            console.log(err);
            return;
        }

        console.log(req.user._id);

        return res.redirect('back');
    })
}