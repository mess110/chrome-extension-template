document.querySelector('#thebutton').onclick = () => {
  chrome.tabs.getSelected(null, (tab) => {
    let code = "alert(document.title);"
    chrome.tabs.executeScript(tab.id, { code: code });
  })
}
