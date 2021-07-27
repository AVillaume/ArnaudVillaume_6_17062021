const callJson = "data/fisheye_data.json";

fetch(callJson)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    } else {
      photographerList.innerHTML +=`<p class="showStatus">${res.status} - ${res.statusText}</p>`;
    }
  })
  .then(function(value) {
    console.log(value)
    showInfo(value.photographers)
    showAllTags(value.tagsList)
  })
  .catch(function(err) {
    photographerList.innerHTML += `<p class="showError">${err} !</p>` 
    // Une erreur est survenue
  });