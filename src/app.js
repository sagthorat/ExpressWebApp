const express = require('express');
const app = express();

app.get('', (req, res) => {


    res.send('<h1> Hello Express!!!<h1>');
})
app.get('/help', (req, res) => {


    res.send(
        [{
                name: 'Justin',
                Age: 34
            },
            {
                name: 'Credible',
                age: 43

            }
        ]
    );
})

app.get('/about', (req, res) => {


    res.send('<h1>About</h1>');
})

app.get('/weather', (req, res) => {


    res.send({
        forecast : 'Snowing',
        location: 'Melbourne'
    });
})


app.listen(3000, () => {

    console.log("Server is running");
})