import "./styles.css";

const submitButton = document.getElementById("submit-data");
const content = document.getElementById("content");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const url =
    "https://api.tvmaze.com/search/shows?q=" +
    document.getElementById("input-show").value;

  console.log(".input-show:");
  console.log(document.getElementById("input-show").value);

  fetchData(url);
});

console.log(".submit-data:");
console.log(submitButton);

async function fetchData(url) {
  const dataPromise = await fetch(url);
  const dataList = await dataPromise.json();

  dataList.forEach((title) => {
    //<div class="show-data"></div>

    let dataElement = document.createElement("div");
    dataElement.setAttribute("class", "show-data");

    let img = document.createElement("img");
    // Some shows doesn't have an image
    if (!(title.show.image === null)) {
      let imgSrc = title.show.image.medium;
      img.setAttribute("src", imgSrc);
    }

    let div = document.createElement("div");
    div.setAttribute("class", "show-info");
    let name = document.createElement("h1");
    name.innerText = title.show.name;
    let summary = document.createElement("p");
    summary.innerHTML = title.show.summary;

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(summary);

    dataElement.appendChild(div);

    content.appendChild(dataElement);
  });
}
