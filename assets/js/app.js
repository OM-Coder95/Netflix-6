const cl = console.log;

const movieContainer = document.getElementById("movieContainer");
const showModelBtn = document.getElementById("showModelBtn");
const backdrop = document.getElementById("backdrop");
const movieModal = document.getElementById("movieModal");
const closeIcon = document.getElementById("closeIcon");
const closeBtn = document.getElementById("closeBtn");

const movieForm = document.getElementById("movieForm");
const movieName = document.getElementById("movieName");
const movieImg = document.getElementById("movieImg");
const movieDescripion = document.getElementById("movieDescripion");
const movieRating = document.getElementById("movieRating");

const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

// Data

let jsonArr = localStorage.getItem("movieArray");

let movieArray = jsonArr ? JSON.parse(jsonArr) : [];

// functions

// show hide movieModal

function onToggleMovieModal() {
  movieModal.classList.toggle("active");
  backdrop.classList.toggle("active");
}

// saveDataInLS

function saveData() {
  localStorage.setItem("movieArray", JSON.stringify(movieArray));
}

// setRating

function setRating(rating) {
  if (rating > 7) {
    return "badge-success";
  } else if (rating > 5) {
    return "badge-warning";
  } else {
    return "badge-danger";
  }
}

// read

function showOnUI(arr) {
  let result = "";

  arr.forEach((ele) => {
    result += `
         <div class="col-md-3 mb-3">
                <div class="card movieCard" id="${ele.id}">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${ele.movieName}</h4>
                            </div>
                            <div class="col-2">
                                <h5 class="m-0"><span class="badge ${setRating(ele.rating)}">${ele.rating}</span></h5>
                            </div>
                        </div>
                    </div>

                    <div class="card-body py-0">
                        <figure class="m-0">
                            <img src="${ele.movieImg}" alt="${ele.movieName}" title="${ele.movieName}">
                            <figcaption>
                                <h5>${ele.movieName}</h5>
                                <p>${ele.description}</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="card-footer d-flex justify-content-between">
                        <button onclick="editMovie(this)" class="btn btn-sm text-white net-sec-btn">Edit</button>
                        <button class="btn btn-sm net-pri-btn">Remove</button>
                    </div>
                </div>
            </div>
        `;
  });
  movieContainer.innerHTML = result;
}

showOnUI(movieArray);

// Create

function onMovieAdd(event) {
  event.preventDefault();

  let newMovie = {
    id: crypto.randomUUID(),
    movieName: movieName.value.trim(),
    movieImg: movieImg.value.trim(),
    description: movieDescripion.value.trim(),
    rating: movieRating.value,
  };

  movieArray.unshift(newMovie);
  saveData();
  onToggleMovieModal();
  movieForm.reset();

  //   UI

  let div = document.createElement("div");

  div.id = newMovie.id;

  div.className = `col-md-3 mb-3`;

  div.innerHTML = `
  <div class="card movieCard" id="${newMovie.id}">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${newMovie.movieName}</h4>
                            </div>
                            <div class="col-2">
                                <h5 class="m-0"><span class="badge ${setRating(newMovie.rating)}">${newMovie.rating}</span></h5>
                            </div>
                        </div>
                    </div>

                    <div class="card-body py-0">
                        <figure class="m-0">
                            <img src="${newMovie.movieImg}" alt="${newMovie.movieName}" title="${newMovie.movieName}">
                            <figcaption>
                                <h5>${newMovie.movieName}</h5>
                                <p>${newMovie.description}</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div class="card-footer d-flex justify-content-between">
                        <button onclick="editMovie(this)" class="btn btn-sm text-white net-sec-btn">Edit</button>
                        <button class="btn btn-sm net-pri-btn">Remove</button>
                    </div>
                </div>
  `;

  movieContainer.prepend(div);
}

// edit

function editMovie(ele) {
  let editId = ele.closest(".movieCard").id;
  localStorage.setItem("editId", editId);
  onToggleMovieModal();

  let editObj = movieArray.find((ele) => ele.id === editId);
  if (!editObj) return;

  movieName.value = editObj.movieName;
  movieImg.value = editObj.movieImg;
  movieDescripion.value = editObj.description;
  movieRating.value = editObj.rating;

  submitBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}

showModelBtn.addEventListener("click", onToggleMovieModal);
closeIcon.addEventListener("click", onToggleMovieModal);
closeBtn.addEventListener("click", onToggleMovieModal);
backdrop.addEventListener("click", onToggleMovieModal);

movieForm.addEventListener("submit", onMovieAdd);
