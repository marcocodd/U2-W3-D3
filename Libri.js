// funzione per generare una riga con 4 colonne dinamicamente

const container = document.querySelector(".container");

//fetch dei libri

fetch("https://striveschool-api.herokuapp.com/books")
 .then((response) => {
  if (response.ok) {
   return response.json();
  } else {
   throw new Error();
  }
 })
 .then((arrayOfBooks) => {
  console.log(arrayOfBooks);
  newRow = document.createElement("div");
  newRow.classList.add("row", "g-2");
  container.appendChild(newRow);
  arrayOfBooks.forEach((book) => {
   const newCol = document.createElement("div");
   newCol.classList.add("col", "col-sm-8", "col-lg-3");
   newRow.appendChild(newCol);
   const cardBook = document.createElement("div");
   cardBook.classList.add("card", "h-100");
   cardBook.innerHTML = `
   
 <img src="${book.img}" class="card-img-top" alt="${book.title}">
 <div class="card-body">
   <h5 class="card-title">${book.title}</h5>
   <p class="card-text">Prezzo: ${book.price} €</p>
   <button class="btn btn-danger">Scarta</button>
 </div>
`;
   newCol.appendChild(cardBook);
  });
 });
