

const re = new RegExp('naruto','gi')
const mat = document.documentElement.innerHTML.match(re)||[]

chrome.runtime.sendMessage({
    url:window.location.href,
    count:mat.length
})