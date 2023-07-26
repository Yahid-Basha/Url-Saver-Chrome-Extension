let myUrls = []
const saved = document.querySelector('#save-btn')
const url = document.querySelector('#url-inp')
const saveAs = document.querySelector('#name-inp')
const listU = document.querySelector('#list')
const clear = document.querySelector('#clear-btn')
const tab = document.querySelector('#tab-btn')
const savedUrls = JSON.parse(localStorage.getItem('myUrls'))
const sort = document.querySelector('#sort-btn')

if(savedUrls){
    myUrls = savedUrls
    render(myUrls)
}

function render(Urls) {
    let StringUrls = "";
    for (let i = 0; i < Urls.length; i++) {
        const key = Object.keys(Urls[i])[0]; // Get the key of the current object
        const value = Urls[i][key]; // Get the value of the current object using the key
        StringUrls += `<li><a href='${value}' target='_blank'>${key}</a></li>`;
    }
    listU.innerHTML = StringUrls;
}


saved.addEventListener("click", function(){
    let urlToSave =  url.value
    let nameOfUrl = saveAs.value
    let obj = {[nameOfUrl] : urlToSave}
    myUrls.push(obj)
    localStorage.setItem('myUrls',JSON.stringify(myUrls))
    url.value=""
    render(myUrls)
})

tab.addEventListener('click', function(){
    chrome.tabs.query({active:true,currentWindow:true}, function(tabs){
        myUrls.push({[tabs[0].title]:tabs[0].url})
        localStorage.setItem('myUrls',JSON.stringify(myUrls))
        render(myUrls)
    })
    
})

clear.addEventListener('dblclick',function(){
    localStorage.clear()
    myUrls = []
    render(myUrls)
})

sort.addEventListener('click',function(){
    // sort the array of objects by the key
    myUrls.sort(function(a,b){
        let keyA = Object.keys(a)[0]
        let keyB = Object.keys(b)[0]
        if(keyA < keyB){
            return -1
        }
        if(keyA > keyB){
            return 1
        }
        return 0
    })
    render(myUrls)
})
// click sort again to reverse the order
sort.addEventListener('dblclick',function(){
    myUrls.reverse()
    render(myUrls)
})


// hover clear button says "double click to clear all" and remove it when mouseout
clear.addEventListener('mouseover',function(){
    clear.innerText = "Double click to clear all"

})
clear.addEventListener('mouseout',function(){
    clear.innerText = "Clear All"
})
