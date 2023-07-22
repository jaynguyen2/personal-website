const express = require('express');

//Express App
const jnWebapp = express();

// Route handler requests
jnWebap.get('/', (req, res) => { 
    res.json({mssg: 'Webcome to JN Website'}); 
}) 

// Listening for requests to backend
jnWebapp.listen(4000, () => {
    console.log('Listening on port 4000!??!?!?');
})