class Photographers {
    //city, country, id, name, portrait, price, tagline, tags
    /**
     * 
     * @param {*} city 
     * @param {*} country 
     * @param {*} id 
     * @param {*} name 
     * @param {*} portrait 
     * @param {*} price 
     * @param {*} tagline 
     * @param {*} tags 
     */
    constructor(city, country, id, name, portrait, price, tagline, tags) {
      this.city = city;
      this.country = country;
      this.id = id;
      this.name = name;
      this.portrait = portrait;
      this.price = price;
      this.tagline = tagline;
      this.tags = tags;
  }
    describe() {
      photographerList.innerHTML += `

      <section class="container__photographer">
                <div class="container__name">
                    <a class="link_photographer" href="">
                        <img class="image_profil" src="images/Photographers_ID/${this.portrait}">
                        <h2>${this.name}</h2>
                    </a>
                </div>    
                <div class="text">
                    <p class="text_location">${this.city}, ${this.country}</p>
                    <p class="text_description">${this.tagline}</p>
                    <p class="text_price">${this.price}€/jour</p>
                </div>
                <div class="link_tag">
                  ${this.tags.map(tag => `<span><a class="link_style" href="">#${tag}</a></span>`).join('')}  
                </div>
            </section>
      
      `
    }
  }
