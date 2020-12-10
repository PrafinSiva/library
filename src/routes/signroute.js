const { Router } = require('express');
const express =require('express');
const signRouter = express.Router();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("views"));


function router(nav){

    signRouter.get('/',function(req,res){
    res.render('sign',
    {
        nav,
        title:'Library',
        
    });
});


signRouter.post('/',(req,res)=>{
    const{uname,mail,pass,pass2}=req.body;
    if(pass!=pass2){
         res.send("Diffrent Password");
    }
    else if(pass.length <=6){
        res.send("Password is not strong")
    }
    else{
        res.redirect('/index')
    }
    
});

return signRouter;

}
module.exports=router;