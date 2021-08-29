var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector('#output')
var serverUrl = 

function constructUrl(input){
    serverUrl = serverUrl + "?" + input;
}

function