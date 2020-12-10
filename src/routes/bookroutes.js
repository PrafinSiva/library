const express =require('express');
const booksRouter = express.Router();

function router(nav){
    var books=[
        {
            title:  'Randamoozham',
            author:'M. T. Vasudevan Nair',
            genre:'Epic',
            img:'rand.jpg'
        },
        {
            title:  'Pathummayude Aadu',
            author:'V M Basheer',
            genre:'Novel',
            img:'aadu.jpg'
        },
        {
            title:  'Chemmen',
            author:'Thakazhi Sivasankara Pillai',
            genre:'Novel',
            img:'chem.jpg'
        },
        {
            title:  'Bhoomikkoru Charamageetham',
            author:'O N V Kurup',
            genre:'Poem',
            img:'bhoo.jpg'
        },
        {
            title:  'Thalamura',
            author:'O V Vijayan',
            genre:'Atheistic',
            img:'thala.jpg'
        },
        {
            title:  'Oru Desathinte Katha',
            author:'S K Pottekkatt',
            genre:'Travelouge',
            img:'oru.jpg'
        }
        ,
        {
            title:  'Avathaalangal',
            author:'Akkitham Namboothiri',
            genre:'Poem',
            img:'avathala.jpg'
        }
        ,
        {
            title:  'Karuna',
            author:'Kumaran Asan',
            genre:'Poem',
            img:'karuna.jpg'
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render('books',
        {
            nav:[{link:'/books',name:'Books'},{link:'/author',name:'Author'}],
            title:'Library',
            books
        });
    });
    
    booksRouter.get('/:i',function(req,res){
        const id = req.params.i;
        res.render('bk',{
                
                nav,
                title:'Library',
                book:books[id]
            
        });
    });
    return booksRouter;
}


module.exports=router;