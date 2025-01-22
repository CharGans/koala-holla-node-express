const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
let koalaList = require('../public/modules/koalas')

// /server/public/modules/koalas.js
// GET
koalaRouter.get('/', (req, res) => {
    console.log(
        'GET request to /koalas sucessful'
    );

    res.send(koalaList);
});

// POST
koalaRouter.post("/" , (req, res) => {
    console.log('POST to /quotes success! Body: ', req.body);

    let koala = req.body;

    console.log("Adding new koala:", koala);
    koalaList.push(koala);

    //koalaList.forEach((koala, index) => {
       // notes.id = index + 1; 
    //});

    console.log("New array is", koalaList);
    /// 201 = data created
    res.sendStatus(201);
});
// PUT
koalaRouter.put('/:id', (req, res) => {
    const currentId = req.params.id;
    const updatedId = req.body;
    
    res.send(currentId)
})

// DELETE
koalaRouter.delete('/:id', (req, res) => {
    console.log('DELETE request successful!');

    let id = Number(req.params.id);
    console.log('Req.params is: ', id);
    
    function deleteQuotes(koala, i) {
        // write a function that deletes the specific id
        // if the quote has the id, it's going to be deleted.
        // if not, it stays. 
        if (i === (id)) {
            return false;
        }
        return true;
    }

    // Pass our callback function into the filter
    koalaList = koalaList.filter(deleteKoala)
    console.log(koalaList)
    // Send back a 204 status for status of DELETED
    res.sendStatus(204); 
});

module.exports = koalaRouter;