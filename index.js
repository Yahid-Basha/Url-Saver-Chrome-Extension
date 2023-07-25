let Urls = []
const saved = document.querySelector('#save-btn')
const url = document.querySelector('#input-box')
const listU = document.querySelector('#list')


saved.addEventListener("click", function(){
    Urls.push(url.value)
    console.log(Urls)
    let ListUrls = ""
    for(let i = 0;i <Urls.length; i++){
        ListUrls += "<li>" + Urls[i] + "</li>"
    }
    listU.innerHTML = ListUrls
})