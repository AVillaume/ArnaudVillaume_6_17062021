const tagNav = document.querySelector(".headerFilters");
const photographerList = document.querySelector('.container');



/*const tags = document.querySelectorAll('.link_style');
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    var clickTag = function (){
      this.classList.toggle
    }
  }
*/

function showInfo (infos) {
  for (let info of infos) {
    const photographers = new Photographers(info.city, info.country, info.id, info.name, info.portrait, info.price, info.tagline, info.tags);
    photographers.describe();
  }
}

/*let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
        console.log(httpRequest.responseText)
        
    }
}
httpRequest.open('GET', "js/fisheye_data.json", true)
httpRequest.send()*/

//myVar = new Array (5).toString();
//console.log(myVar);

