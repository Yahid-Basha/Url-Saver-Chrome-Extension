let Urls = []
const saved = document.querySelector('#save-btn')
const url = document.querySelector('#input-box')
const listU = document.querySelector('#list')
const clear = document.querySelector('#clear-btn')
const savedUrls = JSON.parse(localStorage.getItem('ListUrls'))

if(savedUrls){
    Urls = savedUrls
    renderUrls()
}

clear.addEventListener('dblclick',function(){
    localStorage.clear()
    Urls = []
    renderUrls()
})

saved.addEventListener("click", function(){
    Urls.push(url.value)
    localStorage.setItem('ListUrls',JSON.stringify(Urls))
    url.value=""
    renderUrls()
})

function renderUrls(){
    let ListUrls = ""
    for(let i = 0;i <Urls.length; i++){
        ListUrls += `<li> <a href='${Urls[i]}' target='_blank'> 
        ${Urls[i]}
        </a> </li>`
    }
    listU.innerHTML = ListUrls
}