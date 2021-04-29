const path = require('path');
const express = require('express');

const app = express(); //initialize express
app.set('view engine','hbs')//setting handlebar with express for dynamic content

const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));
app.get('',(req,res)=>{

    res.render('index',{
        title: 'Weather-App',
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

app.listen(3000, () => {

    console.log("Server is running");
})