const API_KEY = "e6c43dc6";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const inputPesquisarNome = $("input[name=nomeFilme]");
const btnPesquisarPorNome = $("#btnPesquisarPorNome");

const cardFilms = $("#cardFilmsContainer");
const myPagination = $("#myPagination");


const innerPage = (page) => {
  $.get(`${API_URL}&s=${inputPesquisarNome.val()}&page=${page}`, function(data, status) {
    console.log(`${API_URL}&s=${inputPesquisarNome.val()}&page=${page}`);

    cardFilms.html("");

    data.Search.forEach(film => {
      cardFilms.append(`
        <div class="card" style="width: 18rem;">
          <img style="height: 300px;" src=${film.Poster === "N/A" ? "https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png" : film.Poster} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${film.Title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${film.Year}</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          </div>
        </div>
      `);
    });
  });
}


btnPesquisarPorNome.on("click", function() {
  const page = 1;
  innerPage(page);
});
