document.getElementById("ReadHighlight").addEventListener('click',()=>{
  var b2=localStorage.getItem("body1");
  console.log(typeof(b2));
  if(b2){
    document.getElementsByTagName("body")[0].innerHTML=b2;
  }
  
});

document.getElementById("btn2").addEventListener('click',()=>{
  var b2=localStorage.removeItem("body1");
});


// document.getElementById('btn').addEventListener('click',()=>{
//   var x=window.getSelection();
//   ele= document.createElement('span');
//   ele.setAttribute("style", "background-color:yellow");
//   if(x.focusNode){ 
//     // console.log(x.toString()); 
//     range= x.getRangeAt(0);
//     var documentFragment = range.extractContents();
//     ele.appendChild(documentFragment);
//     range.insertNode(ele);
//     window.localStorage.setItem("body1",document.getElementsByTagName("body")[0].innerHTML);
//   }
// });
   

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
        page_url:tabs[0].url
      }
      chrome.tabs.sendMessage(tabs[0].id,msg);
  });
}