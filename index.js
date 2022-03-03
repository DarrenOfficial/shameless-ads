const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.disable('etag')
app.disable('x-powered-by')



// create server
app.listen(port, () => {
    console.log(`Hello nerd, I am up at ${port}`);
    }
);

// listen to / endpoint and redirect to https://cdn.darrennathanael.com/video/free.mp4
app.get('/', (req, res) => {
    res.redirect('https://cdn.darrennathanael.com/video/free.mp4');
}
);

app.get('/api/v1/ads', (req, res) => {
    const images = fs.readdirSync(path.join(__dirname, 'assets'));
    const randomImage = images[Math.floor(Math.random() * images.length)];
    res.sendFile(path.join(__dirname, 'assets', randomImage));
});