/*
*       SERVER APP
*/

//  Define dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//  Config
const app = express();

const port = process.env.PORT || '8080';
const isProduction = process.env.IS_PRODUCTION?.toLowerCase() === 'true';

app.use(bodyParser.json());

// Serve static files from the 'dist' folder
const staticPath = path.join(__dirname, 'dist');
app.use(express.static(staticPath));

/*
*   OPEN UP PORT FOR LISTENING
*
*/
app.listen(parseInt(port), () => {
    //  NOTIFY STATUS
    console.log(`Express server is up and running on port ${parseInt(port)} in ${(isProduction ? "production" : "development")} mode.`);
});
