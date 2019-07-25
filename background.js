window.naruto={}

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    window.naruto[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.create({url:'spoil.html'})
})