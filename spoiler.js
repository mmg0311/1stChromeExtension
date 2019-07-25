document.addEventListener('DOMContentLoaded',function (){
    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.naruto).forEach(function(url){
        const div = document.createElement('div')
        div.textContent = `${url}:${bg.naruto[url]}`
        document.body.appendChild(div)
    })
},false)    
