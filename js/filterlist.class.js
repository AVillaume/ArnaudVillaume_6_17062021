let tagArray = [];
let allTagsArray = ["Art", "Fashion", "Architecture", "Travel", "Sport", "Animals", "Events"];

function showAllTags () {
    for (let i = 0; i < tagArray.length; i++);
    tagArray.push(allTagsArray)
    tagNav.innerHTML += `${tagArray.map(tag => 
        `<li><a class="link_style" href="">#${tag[0]}</a></li>
         <li><a class="link_style" href="">#${tag[1]}</a></li>
         <li><a class="link_style" href="">#${tag[2]}</a></li>
         <li><a class="link_style" href="">#${tag[3]}</a></li>
         <li><a class="link_style" href="">#${tag[4]}</a></li>
         <li><a class="link_style" href="">#${tag[5]}</a></li>
         <li><a class="link_style" href="">#${tag[6]}</a></li>`)}`
    console.log(tagArray)
}


/*
<a class="link_style" href="">#Portrait</a>
                    <a class="link_style" href="">#Art</a>
                    <a class="link_style" href="">#Fashion</a>
                    <a class="link_style" href="">#Architecture</a>
                    <a class="link_style" href="">#Travel</a>
                    <a class="link_style" href="">#Sport</a>
                    <a class="link_style" href="">#Animals</a>
                    <a class="link_style" href="">#Events</a>*/