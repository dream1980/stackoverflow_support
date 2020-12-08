/*chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.message == 'Test')
      console.log('Got message');
      chrome.tabs.executeScript(null, { file: "/js/inject.js" }, function() {
          console.log("injected!");
      });
  });
  */

chrome.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; ++i) {
        console.log(tabs[i].url);
        if (tabs[i].url.indexOf("popup.html") > 0)
            chrome.tabs.executeScript(tabs[i].id, {file: "js/inject.js", allFrames: true});
    }
});
