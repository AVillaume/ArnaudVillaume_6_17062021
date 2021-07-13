console.log('js');
const callJson = "js/fisheye_data.json"
const photographerList = document.querySelector('.container');

/*const tags = document.querySelectorAll('.link_style');
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    var clickTag = function (){
      this.classList.toggle
    }
  }

tags.addEventListener('click', function(e) {

})*/

fetch(callJson)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value)
    showInfo(value.photographers)
  })
  .catch(function(err) {
    // Une erreur est survenue
  });

  class Photographers {
    //chosenPicture, city, country, id, name, portrait, price, tagline, tags
    
    constructor(chosenPicture, city, country, id, name, price, tagline, tags) {
      this.chosenPicture = chosenPicture;
      this.city = city;
      this.country = country;
      this.id = id;
      this.name = name;
      //this.portrait = portrait;
      this.price = price;
      this.tagline = tagline;
      this.tags = tags;
  }
    /*describe() {
      console.log("Voici la liste des photographes : " + this.name + "réside à " + this.city)
    }*/
    describe() {
      photographerList.innerHTML += `

      <section class="container__photographer">
                <div class="container__name">
                    <a class="link_photographer" href="">
                        <img class="image_profil" src="${this.chosenPicture}">
                        <h2>${this.name}</h2>
                    </a>
                </div>    
                <div class="text">
                    <p class="text_location">${this.city}, ${this.country}</p>
                    <p class="text_description">${this.tagline}</p>
                    <p class="text_price">${this.price}€/jour</p>
                </div>
                <div class="link_tag">
                  ${this.tags.map(tag => `<a class="link_style" href="">#${tag}</a>`).join('')}  
                </div>
            </section>
      
      `
    }
  }

function showInfo (infos) {
  for (let info of infos) {
    const photographers = new Photographers(info.chosenPicture, info.city, info.country, info.id, info.name, info.price, info.tagline, info.tags);
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