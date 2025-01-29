const express = require('express');
const koalaRouter = express.Router();

const pg = require('pg')

const pool = new pg.Pool(
{
    host: 'localhost',
    port: 5432,
    database: 'Koalas' 
});

// koalaRouter.post('/', (req, res) => {
//     console.log('Received data to add koala', req.body);
//     const { name, favorite_color, age, ready_to_transfer, notes } = req.body;
    
// }) 



// DB CONNECTION
let koalaList = require('../public/modules/koalas')

// /server/public/modules/koalas.js
// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET request received for all koalas');

    const queryText = 'SELECT * FROM koalas ORDER BY id;';

    pool.query(queryText)
        .then((result) => {
            console.log('Koalas retrieved:', result.rows);
            res.json(result.rows);
        })
        .catch(error => {
            console.error('Error fetching koalas:', error);
            res.sendStatus(500);
        });
});




// koalaRouter.get('/', (req, res) => {
//     const queryText = 'SELECT * FROM "koalas";';
//     pool.query(queryText)
//         .then((result) => {
//             console.log(`Query works: ${queryText}`)
//             console.log('The result is ', result)
//             res.send(result.rows)
            
//         })
//         .catch((err) => {
//             console.log(`query ${queryText} failed: error ${err}`)
//             res.sendStatus(500);           
//         });

//     console.log(
//         'GET request to /koalas sucessful'
//     );

//     res.send(koalaList);
// });

koalaRouter.post('/', (req, res) => {
    console.log('Received data to add koala:', req.body); 

    const { name, favorite_color, age, ready_to_transfer, notes } = req.body;

    // SQL query to insert new koala
    const queryText = `
        INSERT INTO Koalas (name, favorite_color, age, ready_to_transfer, notes)
        VALUES ($1, $2, $3, $4, $5);
    `;

    // Execute the query
    pool.query(queryText, [name, favorite_color, age, ready_to_transfer, notes])
        .then(() => {
            console.log('Koala added successfully!');
            res.sendStatus(201); // Send '201 Created' response
        })
        .catch((error) => {
            console.error('Error adding koala:', error);
            res.sendStatus(500); // Send '500 Internal Server Error' response
        });
});
koalaRouter.delete('/:id', (req, res) => {
    console.log('Deleting koala with ID:', req.params.id);

    const koalaId = req.params.id; 

    // SQL query to delete the koala
    const queryText = `
        DELETE FROM Koalas WHERE id = $1;
    `;

    // Execute the query
    pool.query(queryText, [koalaId])
        .then(() => {
            console.log(`Koala with ID ${koalaId} deleted successfully!`);
            res.sendStatus(200); 
        })
        .catch((error) => {
            console.error('Error deleting koala:', error);
            res.sendStatus(500); 
        });
});

// POST
// koalaRouter.post("/" , (req, res) => {
//     console.log('POST to /quotes success! Body: ', req.body);

//     let koala = req.body;

//     console.log("Adding new koala:", koala);
//     //koalaList.push(koala);

//     //koalaList.forEach((koala, index) => {
//        // notes.id = index + 1; 
//     //});

//     console.log("New array is", koalaList);
//     /// 201 = data created
//     res.sendStatus(201);
// });
// PUT
koalaRouter.put('/:id', (req, res) => {
    const currentId = req.params.id;
    const updatedId = req.body;
    
    res.send(currentId)
})



// DELETE
// koalaRouter.delete('/:id', (req, res) => {
//     console.log('DELETE request successful!');

//     let id = Number(req.params.id);
//     console.log('Req.params is: ', id);
    
    function deleteKoala(koala, i) {
        // write a function that deletes the specific id
        // if the quote has the id, it's going to be deleted.
        // if not, it stays. 
        if (i === (id)) {
            return false;
        }
        return true;
    }

//     // Pass our callback function into the filter
//     koalaList = koalaList.filter(deleteKoala)
//     console.log(koalaList)
//     // Send back a 204 status for status of DELETED
//     res.sendStatus(204); 
// });

module.exports = koalaRouter;