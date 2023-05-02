chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.action.show(sender.tab.id);
    sendResponse();
  }
);
