chrome.browserAction.onClicked.addListener(function(tab) {
  // for the current tab, inject the "mouseover.js" file & execute it
  chrome.tabs.executeScript(tab.ib, {
    file: "mouseover.js"
  });
});
