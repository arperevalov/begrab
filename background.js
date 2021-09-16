chrome.runtime.onMessage.addListener(
  function(arg, sender, sendResponse) {

  if(arg.src){
    
    chrome.downloads.download({
      url: arg.src,
      conflictAction: "prompt"
      }, function (downloadId) {
        console.log(downloadId);
    });
  }
  
});

  // function sendResponse(){
  // }