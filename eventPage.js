// var contextMenuItem = {
//     "id":"webnote",
//     "title":"WebNote",
//     "contexts":["selection"]
// };
// chrome.contextMenus.create(contextMenuItem);

chrome.browserAction.onClicked.addListener((tab)=>
{ 
    console.log(tab);
    let tab_data = {
        page_url:tab.url,
        selectiontText:tab.selectionText
    }
    console.log(tab_data);
    
    chrome.tabs.sendMessage(tab.id,tab_data);
});



