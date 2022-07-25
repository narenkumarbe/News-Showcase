function indBusinessNews() {
  apiUrl =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4cb30b5f6ffc49a2921787740e77a4cb";

  fetch(apiUrl)
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      // console.log(completedata);
      let output = "";
      let latestNews = completedata.articles;
      for (var i in latestNews) {
        output += `<div class="card">
      <h1 class="title">${latestNews[i].title}</h1>
      <img src= ${latestNews[i].urlToImage} alt="img" class="images" />
      <p><span>Published On:</span> ${latestNews[i].publishedAt}</p>      
      <p><span>Description:</span> ${latestNews[i].description}</p>
      <p><span>Content:</span> ${latestNews[i].content}</p>
      <a href= ${latestNews[i].url}>Read More</a>
    </div>`;
      }
      // console.log(output);
      document.getElementById("cards").innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}
document
  .getElementById("indBusinessNews")
  .addEventListener("click", indBusinessNews);
document
  .getElementById("usBusinessNews")
  .addEventListener("click", usBusinessNews);

function usBusinessNews() {
  apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4cb30b5f6ffc49a2921787740e77a4cb";

  fetch(apiUrl)
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      // console.log(completedata);
      let output = "";
      let latestNews = completedata.articles;
      for (var i in latestNews) {
        output += `<div class="card">
        <h1 class="title">${latestNews[i].title}</h1>
        <img src= ${latestNews[i].urlToImage} alt="img" class="images" />
        <p><span>Published On:</span> ${latestNews[i].publishedAt}</p>      
        <p><span>Description:</span> ${latestNews[i].description}</p>
        <p><span>Content:</span> ${latestNews[i].content}</p>
        <a href= ${latestNews[i].url}>Read More</a>
      </div>`;
      }
      // console.log(output);
      document.getElementById("cards").innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
}
