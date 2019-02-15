chrome.extension.sendMessage({}, (response) => {
  let readyStateCheckInterval = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      console.log("Hello. This message was sent from src/inject/inject.js");
    }
  }, 10);
});
