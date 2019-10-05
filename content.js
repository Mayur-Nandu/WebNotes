chrome.runtime.onMessage.addListener(highlightSelection);

function highlightSelection(request,sender,sendResponse){
    var x=window.getSelection();
    ele= document.createElement('span');
    
    ele.setAttribute("style", "background-color:yellow");
    if(x.focusNode){ 
        console.log(x.toString());
        range= x.getRangeAt(0);
        var documentFragment = range.extractContents();
        ele.appendChild(documentFragment);
        range.insertNode(ele);
        window.localStorage.setItem(request.page_url,document.getElementsByTagName("body")[0].innerHTML);
    }
}

