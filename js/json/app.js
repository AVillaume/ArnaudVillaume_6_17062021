let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
        console.log(httpRequest.responseText)
        
    }
}
httpRequest.open('GET', "js/json/fisheye_data.json", true)
httpRequest.send()