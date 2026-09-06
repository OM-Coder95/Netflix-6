const cl = console.log;

const movieContainer = document.getElementById("movieContainer");

// Data

let jsonArr = localStorage.getItem("movieArray");

let movieArray = jsonArr ? JSON.parse(jsonArr) : [];

// functions

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
                <div class="card movieCard" id"${ele.id}">
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
                        <button class="btn btn-sm text-white net-sec-btn">Edit</button>
                        <button class="btn btn-sm net-pri-btn">Remove</button>
                    </div>
                </div>
            </div>
        `;
  });
  movieContainer.innerHTML = result;
}

showOnUI(movieArray);
