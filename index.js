let Urls = ['dsssfs','asfsfas','asffsdaww']
const saved = document.querySelector('#save-btn')
const url = document.querySelector('#input-box')
const listU = document.querySelector('#list')


saved.addEventListener("click", function(){
    Urls.push(url.value)
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