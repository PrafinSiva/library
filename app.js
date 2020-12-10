const express =require('express');

const app = express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("views"));

const nav=[
    {link:'/books',name:'Books'},
    {link:'/author',name:'Author'},
    {link:'/addbook',name:'Add Book'},
    {link:'/sign',name:'Sign'},
    {link:'/login',name:'Login'}
    
];
        

const booksRouter = require('./src/routes/bookroutes')(nav);
const authorRouter = require('./src/routes/authorroute')(nav);
const addRouter = require('./src/routes/addrouter')(nav);
const signRouter = require('./src/routes/signroute')(nav);
const loginRouter = require('./src/routes/loginroute')(nav);


app.use(express.static('./public')) 
app.set('view engine','ejs');
app.set('views','./src/views')
app.use('/books',booksRouter)
app.use('/author',authorRouter)
app.use('/addbook',addRouter)
app.use('/sign',signRouter)
app.use('/login',loginRouter)


app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:'Library'
    });
});


app.listen(port,()=>{
    console.log("SERVER READY");
});