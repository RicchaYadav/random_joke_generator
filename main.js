const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apikey = "qFwGj4pE8rnTr3+YjSwDTw==OCM0qHl5JsES9N10"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey, 
    }
}
// const limit = 1;

const apiUPL = "https://api.api-ninjas.com/v1/dadjokes?limit=1" ;
async function getjoke(){
   
    try{

    jokeEl.innerHTML = "Updating..."; // add loading effect
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading..";

    const response = await fetch( apiUPL, options)
    const data = await response.json()

    btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a Joke";

    const joke = (data[0].joke)
    jokeEl.innerHTML = joke;
    }

    catch(error){
        jokeEl.innerHTML = "An error occured, try again later";
        btnEl.disabled = false;
        btnEl.innerHTML = "Tell me a Joke";
        console.log(error);
    }
};


btnEl.addEventListener('click', getjoke)