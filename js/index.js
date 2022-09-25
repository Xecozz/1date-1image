let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})

async function sendApiRequest(){
    let mot =document.getElementById("searchTerm").value;
    let API_KEY = "qXmZBaq0hZkcKFUqIP6FrUKyDhIrt5O3QVaUfI1K"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${mot}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    if( data.url == undefined){
        document.querySelector("#title").innerHTML = "Aucune image trouvée pour cette date :("
    }
    else{
        document.querySelector("#title").innerHTML = data.title
        document.querySelector("#img").innerHTML = `<img src="${data.url}">`
        document.querySelector("#txt").innerHTML = data.explanation
    }
    

}

