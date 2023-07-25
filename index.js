let myUrls = []
const saved = document.querySelector('#save-btn')
const url = document.querySelector('#input-box')
const listU = document.querySelector('#list')
const clear = document.querySelector('#clear-btn')
const tab = document.querySelector('#tab-btn')
const savedUrls = JSON.parse(localStorage.getItem('myUrls'))

if(savedUrls){
    myUrls = savedUrls
    render(myUrls)
}

function render(Urls){
    let StringUrls = ""
    for(let i = 0;i <Urls.length; i++){
        StringUrls += `<li> <a href='${Urls[i]}' target='_blank'> 
        ${Urls[i]}
        </a> </li>`
    }
    listU.innerHTML = StringUrls
}

tab.addEventListener('click', function(){
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myUrls.push(tabs[0].url)
        localStorage.setItem('myUrls',JSON.stringify(myUrls))
        render(myUrls)
    })
    
})

clear.addEventListener('dblclick',function(){
    localStorage.clear()
    myUrls = []
    render(myUrls)
})

saved.addEventListener("click", function(){
    myUrls.push(url.value)
    localStorage.setItem('myUrls',JSON.stringify(myUrls))
    url.value=""
    render(myUrls)
})
