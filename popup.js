function highlightSelection(){
var x=window.getSelection();
ele= document.createElement('span');
ele.setAttribute("style", "background-color:yellow");
if(x.focusNode){ 
    // console.log(x.toString()); 
    range= x.getRangeAt(0);
var documentFragment = range.extractContents();
ele.appendChild(documentFragment);
range.insertNode(ele);
window.localStorage.setItem("body1",document.getElementsByTagName("body")[0].innerHTML);
}

}

document.getElementById("btn1").addEventListener('click',()=>{
  var b2=localStorage.getItem("body1");
  console.log(typeof(b2));
  if(b2){
    document.getElementsByTagName("body")[0].innerHTML=b2;
  }
  
});

document.getElementById("btn2").addEventListener('click',()=>{
  var b2=localStorage.removeItem("body1");
});


document.getElementById('btn').addEventListener('click',highlightSelection);
   
 
