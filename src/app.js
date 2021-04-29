const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express(); //initialize express

//Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewPaths = path.join(__dirname,'../templates/views'); //path where hbs views are stored
const partialPaths = path.join(__dirname,'../templates/partials');
hbs.registerPartials(partialPaths);

//Setup handle bar engines and views location
app.set('views', viewPaths);
app.set('view engine','hbs')//setting handlebar with express for dynamic content

//Setup static directory to serve
app.use(express.static(publicDirPath));


app.get('',(req,res)=>{

    res.render('index',{
        title: 'Weather-Application',
        name: 'Node JS'

    }); //render dynamic contents using hbs

})

app.get('/about',(req,res)=>{

    res.render('about',{
        title: 'Weather-App Version 1.1',
        name: 'Node JS'

    }); //render dynamic contents using hbs

})

app.get('/help',(req,res)=>{

    res.render('about',{
        title: 'Weather-App Help Section',
        name: 'Node JS'

    }); //render dynamic contents using hbs

})

//If the resource doesn't exist, throw 404 error
app.get('/help/*',(req,res)=>{

    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found'
    });

})

app.get('*',(req,res)=>{

    res.render('404', {
        title: '404 Page not found',
        errorMessage: 'Page not found'
    });

    }); //render dynamic contents using hbs


//start the express web server and listen on port 3000
app.listen(3000, () => {

    console.log("Server is running");
})