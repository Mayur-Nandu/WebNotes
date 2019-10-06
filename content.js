chrome.runtime.onMessage.addListener(highlightSelection);

function highlightSelection(request,sender,sendResponse){
    if(request.clr==1)
    {
        localStorage.removeItem(request.page_url);
    }
    else if(request.ReadHighlight == 0){
        //perform function for highloghting
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
    else if(request.ReadHighlight == 1)
    {
        //perform operation for retriving data from localstorage
        page_html=localStorage.getItem(request.page_url);
        if(page_html){
            document.getElementsByTagName("body")[0].innerHTML=page_html;
        }
    }
    
   
}

