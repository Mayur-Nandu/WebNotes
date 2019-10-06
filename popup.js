document.getElementById("ReadHighlight").addEventListener('click',()=>{
  
  let param={
    active:true, //get all the active tabs 
    currentWindow:true //get the current tab 
  }
  chrome.tabs.query(param,(tabs)=>
  {
    // var b2=localStorage.getItem("https://en.wikipedia.org/wiki/Main_Page");
      let msg={
        page_url:tabs[0].url,
        ReadHighlight:1,
        clr:0
      }
      chrome.tabs.sendMessage(tabs[0].id,msg);
  });
});

document.getElementById("clearHighlight").addEventListener('click',()=>{
  let param={
    active:true, //get all the active tabs 
    currentWindow:true //get the current tab 
  }
  chrome.tabs.query(param,(tabs)=>
  {
    // var b2=localStorage.getItem("https://en.wikipedia.org/wiki/Main_Page");
      let msg={
        page_url:tabs[0].url,
        ReadHighlight:1,
        clr:1
      }
      chrome.tabs.sendMessage(tabs[0].id,msg);
  });
});

document.getElementById('highlight').addEventListener('click',sendMsg);

function sendMsg()
{
  let param={
    active:true, //get all the active tabs 
    currentWindow:true //get the current tab 
  }
  chrome.tabs.query(param,(tabs)=>
  {
    console.log(tabs)
      let msg={
        page_url:tabs[0].url,
        ReadHighlight:0,
        clr:0
      }
      chrome.tabs.sendMessage(tabs[0].id,msg);
  });
}