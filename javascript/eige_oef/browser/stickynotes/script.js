function maakLijst(){
    var ul = document.getElementsByTagName("ul")[0];
    var li = document.createElement("li");   
    ul.appendChild(li);
    // var test = document.getElementsByTagName("li").index;
    // console.log(test);
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
    img.id="btnClose";
    img.setAttribute("class","btnClose");
    img.onclick = deleteLijst;

}


function maakKnop(){
    var btnImg = document.getElementById("newNote");     
    btnImg.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

function deleteLijst(){
    // var ul = document.getElementsByTagName("ul")[0];
    // while (ul.firstChild) {
    //     ul.removeChild(ul.firstChild);
    // }
var li;
    li.parentElement.removeChild(this);



    // var li = document.getElementsByTagName('li');
    // li.parentNode.removeChild(li);
}


window.onload = function(){
    
    maakKnop();
    document.getElementById("newNote").onclick = maakLijst;
    document.getElementById("btnClose").onclick = deleteLijst;
}



