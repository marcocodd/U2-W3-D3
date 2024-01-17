// funzione per generare una riga con 4 colonne dinamicamente

const container = document.querySelector(".container");
const Riga4Colonne = function () {
 const newRow = document.createElement("div");
 newRow.classList.add("row");

 for (let i = 0; i < 4; i++) {
  const newCol = document.createElement("div");
  newCol.classList.add("col", "col-sm-8", "col-lg-3");
  newRow.appendChild(newCol);
 }
 container.appendChild(newRow);
};

//fetch dei libri

const getBooks = function () {
 fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
   if (response.ok) {
    return response.json();
   } else {
    throw new Error();
   }
  })
  .then((arrayOfBooks) => {
  console.log(arrayOfBooks)
  arrayOfBooks.forEach(book => {
    Riga4Colonne()
    
  });
  });
};

getBooks()