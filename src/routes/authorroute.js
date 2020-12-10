const express =require('express');
const authorRouter = express.Router();

function router(nav){
    var author=[
        {
            author:'M. T. Vasudevan Nair',
            title:  'Randamoozham',
            genre:'Epic',
            img:'mtvas.jpg'
        },
        {
            author:'V M Basheer',
            title:  'Pathummayude Aadu',
            genre:'Novel',
            img:'basheer.jpg'
        },
        {
            author:'Thakazhi Sivasankara Pillai',
            title:  'Chemmen',
            genre:'Novel',
            img:'thakazhi.jpg'
        },
        {
            author:'O N V Kurup',
            title:  'Bhoomikkoru Charamageetham',
            genre:'Poem',
            img:'onv.jpeg'
        },
        {
            author:'O V Vijayan',
            title:  'Thalamura',
            genre:'Atheistic',
            img:'vij.jpg'
        },
        {
            author:'S K Pottekkatt',
            title:  'Oru Desathinte Katha',
            genre:'Travelouge',
            img:'sk.jpg'
        }
        ,
        {
            author:'Akkitham Namboothiri',
            title:  'Avathaalangal',
            genre:'Poem',
            img:'aki.jpg'
        }
        ,
        {
            author:'Kumaran Asan',
            title:  'Karuna',
            genre:'Poem',
            img:'kum.jpeg'
        }
    ]
    
    authorRouter.get('/',function(req,res){
        res.render('author',
        {
            nav:[{link:'/books',name:'Books'},{link:'/author',name:'Author'}],
            title:'Library',
            author
        });
    });
    
    authorRouter.get('/:i',function(req,res){
        const id = req.params.i;
        res.render('auth',{
                
                nav,
                title:'Library',
                author:author[id]
            
        });
    });
    return authorRouter;
}


module.exports=router;