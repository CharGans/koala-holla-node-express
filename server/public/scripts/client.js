//import {koalaList} from '../modules/koalas.js'

//we are sorry we know this is horrid
let masterKoala = [];

console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );

  // axios call to server to get koalas
axios
// Reach out to the /koalas endpoint
  .get('/koalas')
// Wait for response, then handle a successful case
  .then((response) => {
    console.log(
      "Got data from /koalas",
      
      response.data
    );

    let koalas = response.data;
    masterKoala = koalas;
    // Pass the koalas to our render (display) function
    renderToDOM(koalas);
  })
  // add a .catch to handle the failure case
  .catch((error) => {
    console.log(error);
    alert("Something went wrong!");
  });
} // end getKoalas

// call the function to get the koalas
getKoalas();

function addKoala(event) {
  event.preventDefault();

  //access input fields

  //imported koalas to get id
  let id = masterKoala.length + 1;
  console.log('koala id', id);

  let name = document.querySelector('#nameIn').value;
  let age = document.querySelector('#ageIn').value;
  let favoriteColor = document.querySelector('#colorIn').value;
  let transfer = document.querySelector('#readyForTransferIn').value;
  let notes = document.querySelector('#notesIn').value;
  //let transferButton = `<button>Transfer</button>`;

  console.log('input values', name, age, favoriteColor, transfer, notes);

  //bundle inputs into an object

  let koalaToAdd = {
    id: id,
    name: name,
    favorite_color: favoriteColor,
    age: age,
    ready_to_transfer: transfer,
    notes: notes
  };

  axios
  .post('/koalas', koalaToAdd)
  .then((response) => {
    console.log('successfully POST to /koalas', koalaToAdd)
    
    //clear input fields
    document.querySelector('#nameIn').value = "";
    document.querySelector('#ageIn').value = "";
    document.querySelector('#colorIn').value = "";
    document.querySelector('#readyForTransferIn').value = "";
    document.querySelector('#notesIn').value = "";

    getKoalas();
  })

  .catch((error) => {
    console.log('error in the POST to /koalas', error)
  });
}

//rendering the items to the dom
function renderToDOM(koalas) {
  console.log('in renderToDom')
  let contentDiv = document.querySelector('#viewKoalas');

  //make sure contenddiv is empty
contentDiv.innerHTML = "";

koalas.forEach((koala) => {

  contentDiv.innerHTML += `
          <tr>
            <td>${koala.name}</td>
            <td>${koala.age}</td>
            <td>${koala.favorite_color}</td>
            <td>${koala.ready_to_transfer}</td>
            <td>${koala.notes}</td>
            </tr>
  
  `
})
};

// Is this for part 2?
function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();
