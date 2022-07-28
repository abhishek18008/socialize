const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const bodyParser=require('body-parser');
const passportconfig=require('./config/passport-local-strategy');
const db = require('./config/mongoose');
const session=require('express-session');

var expressLayouts = require('express-ejs-layouts');
const passport=require('passport');
const passportLocal=require('passport-local');
const MongoStore=require('connect-mongo');
const sassMiddleware=require('node-sass-middleware');

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css',

}))
app.use(bodyParser.urlencoded());

app.use(cookieParser());


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name:'socialize',
    secret:"blahsomething",
    saveUninitialized:false,
    resave:false,
    // store: new MongoStore({
    //         mongooseConnection:db,
    //         autoRemove:'disabled'
    //        
        
    // },
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/test-app' })
    // function (err) {
    //     console.log(err || 'no error ');
    // }   
    
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passportconfig.setAuthenticatedUser);

// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
