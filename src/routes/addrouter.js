const { Router } = require('express');
const express =require('express');
const addRouter = express.Router();

function router(nav){
addRouter.get('/',function(req,res){
    res.render('addbook',
    {
        nav,
        title:'Library',
        
    });
});

addRouter.get('/addbook',function(req,res){
    res.render('BOOK ADDED');

});
return addRouter;

}
module.exports=router;