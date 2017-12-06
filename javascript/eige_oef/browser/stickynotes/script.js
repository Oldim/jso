function maakLijst(){
    var ul = document.getElementsByTagName("ul")[0];
    var li = document.createElement("li");   
    ul.appendChild(li);
    var a = document.createElement("a");
    li.appendChild(a);
    var img = document.createElement("img");
    li.appendChild(img);
    var div = document.createElement("div");
    a.appendChild(div);
    var textAreaTitel = document.createElement("TEXTAREA");
    div.appendChild(textAreaTitel);    
    var textArea = document.createElement("TEXTAREA");
    a.appendChild(textArea);
    textArea.className=textArea;
    textArea.setAttribute("class","textArea");
    textAreaTitel.setAttribute("placeholder", "Titel"); 
    textArea.setAttribute("placeholder", "Text"); 
    img.setAttribute("src","images/close.png");    

    // var img = document.getElementsByTagName("img");
    // for (var i = 0; i < img.length; i++) {
    //     img[i].id = "btnClose"+i;        
    // }
    img.setAttribute("class","btnClose");
    var img=ul.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
        img[i].onclick = deleteLijst;
    }
    //img.onclick = deleteLijst;
   // saveLocal(textAreaTitel.value, textAreaTitel.value);
  
  // saveLocal();
}


function maakKnop(){
    var btnImg = document.getElementById("newNote");     
    btnImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

function deleteLijst(e){
    // -----------------delete all li
    // var li = document.getElementsByTagName("li");
    // var lengte = li.length
    // for (var i = 0; i < lengte; i++) {
    //     li[0].parentNode.removeChild(li[0])
    // }
    e = e || window.event;    
    var img = e.target || e.srcElement;
    var li = img.parentNode;
    li.parentNode.removeChild(li);
}


window.onload = function(){
    
    maakKnop();
    document.getElementById("newNote").onclick = maakLijst;

    var div = document.getElementsByTagName("div");
    for (var i = 0; i < div.length; i++) {
        div[i].onmouseout = saveLocal;
       // div[i].querySelector("TEXTAREA").value = saveLocal;
    }
  // reloadLocal();
  //saveLocal();
}

function Note(textAreaTitel,textArea){
    this.textAreaTitel = textAreaTitel;
    this.textArea = textArea;
}
var note = [];
function pushToArray() {
    var div = document.getElementsByTagName("div");
    for(var i=0; i < div.length; i++){
       var textAreaTitel = div[i].querySelector("TEXTAREA").value;
        note.push( new Note(textAreaTitel) );        
    }
    console.log(textAreaTitel);
}

function saveLocal(textAreaTitel,textArea) {
    // var li = document.getElementsByTagName("li");    
    // var a = document.querySelectorAll("li>a");    
    // var div = document.querySelectorAll("div>a");    
   // var textAreaTitel = document.querySelectorAll("div>TEXTAREA").value;    
    var textArea = document.querySelectorAll("a>TEXTAREA").value;

    // var div = document.getElementsByTagName("div");
    // for (var i = 0; i < div.length; i++) {
    //    // div[i].onmouseover = showAnswer;
    //     div[i].querySelector("TEXTAREA").value = saveLocal;
    // }
    
    var div = document.getElementsByTagName("div");
    for(var i=0; i < div.length; i++){
       var textAreaTitel = div[i].querySelector("TEXTAREA").value;
        note.push( new Note(textAreaTitel) );        
    }
    console.log(textAreaTitel);  


	// var img = document.querySelectorAll("li>img").value;

    // localStorage.setItem('li', li);    
    // localStorage.setItem('a', a);    
    // localStorage.setItem('div', div);    
    // localStorage.setItem('textAreaTitel', textAreaTitel);
    // localStorage.setItem('textArea', textArea);    
    // localStorage.setItem('img', img);
    
    localStorage.setItem('note', JSON.stringify({ textAreaTitel: textAreaTitel, textArea: textArea }));
    console.log(textAreaTitel);
}

function reloadLocal() {

    var bgColor = localStorage.getItem('bgColor');
	var shape = localStorage.getItem('shape');
	var colorShape = localStorage.getItem('colorShape');
	var txtColor = localStorage.getItem('txtColor');
	var tweet = localStorage.getItem('tweet');
	var tweetTxtSize = localStorage.getItem('tweetTxtSize');
	var square = localStorage.getItem('square');
	var cirkel = localStorage.getItem('cirkel');

	document.getElementById("backgroundColor").value = bgColor;
	document.getElementById("shape").value = shape;
	document.getElementById("colorCircles").value = colorShape;
	document.getElementById("foregroundColor").value = txtColor;
	document.getElementById("tweets").value = tweet;
	document.getElementById("tweetTxtSize").value = tweetTxtSize;
	previewHandler();
}