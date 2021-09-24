var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector('#output')
var serverUrl = 

function constructUrl(input){
    serverUrl = serverUrl + "?" + input;
}

function getTranslationURL(input){
    return serverUrl + "?" + "text" + input
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with the server, try again in some time!")
}

function clickHandler(){
    inputTxt = txtInput.value
    fetch(constructUrl(inputTxt))
    .then(response => (response.json))
    .then(outputDiv.innertext = json.contents.translated)

    .catch(errorHandler);   
}

btnTranslate.addEventListener("click", clickHandler())