import "./styles.css";

const submitButton = document.getElementById("submit-data");
const showList = document.getElementsByClassName("show-data");

submitButton.addEventListener("click", () => {
  const url =
    "https://api.tvmaze.com/search/shows?q=" +
    document.getElementById("input-show").value;
  fetchData(url);
});

async function fetchData(url) {
  const dataPromise = await fetch(url);
  const dataList = await dataPromise.json();

  dataList.forEach((title) => {
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

    showList[0].appendChild(div);
  });
}
