import express from 'express';
import cors from 'cors';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../shared/App';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static('dist'));

app.get('*', (req, res) => {
    const context = {};

    const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
            <App />
        </StaticRouter>
    );
    
    // File location is relative to the directory location that is running the program
    const indexFilePath = 'dist/index.html';
    fs.readFile(indexFilePath, 'utf8', (err, data) => {
        if (err) {
            console.log('Something went wrong:', err);
            res.status(500).send('Oops, something went wrong.');
        }

        res.send(
            data.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
        );
    })
});

app.listen(PORT, () => 
    console.log(`Express server listening on port ${PORT}. Running in [${process.env.NODE_ENV}] mode.`)
);