
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
btnTranslate.addEventListener("click",clickEventHandler);
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text)
{
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occurred",error);
    alert("Something is wrong with server, please try again later");
}

function clickEventHandler(){
    
    
    
    //calling server API for minion transaltion
    var InputText = txtInput.value
    fetch(getTranslationURL(InputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;})
    .catch(errorHandler)
    
};
