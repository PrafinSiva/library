const { Router } = require('express');
const express =require('express');
const loginRouter = express.Router();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("views"));
const email="admin@gmail.com";
const pswd="1234";

function router(nav){

    loginRouter.get('/',function(req,res){
    res.render('login',
    {
        nav,
        title:'Library',
        
    });
});


loginRouter.post('/',(req,res)=>{
    const{mail,pass}=req.body;
    if(pass!= pswd || email!=mail){
         res.send("Wrong data");
    }
    else{
        res.redirect('/books')
    }
    
});

return loginRouter;

}
module.exports=router;