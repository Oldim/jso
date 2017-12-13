/*
 * get the content of a JSON file using Ajax 
 */

window.onload = function() {
	getGeg()
};



function getGeg() {
	 //var url = "sales.json";  
	 var url = "http://gumball.wickedlysmart.com"; 
	 var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState == 4  && this.status == 200){
			//document.getElementById("sales").innerHTML = request.responseText;
			

			var sales = JSON.parse(request.responseText);
			displayGeg(sales);
		}
	}
	request.open("GET", url);
	request.send();
}

function displayGeg(sales) {
	// var p = document.getElementById("sales");	
	// sales[this.name];
	// p.innerHTML = sales;
	// console.log(sales[this.name])
	//var sales = JSON.parse(request.responseText);
	var divParent = document.getElementById("sales");
	
		for (var i = 0; i < sales.length; i++) {
			var name = sales[i].name;
			var sold = sales[i].sales;
			var div = document.createElement("div");
			
			div.innerHTML = name+" sold "+sold+" gumballs";	
			div.setAttribute("class","saleItem");
			//div.className("saleItem");
			divParent.appendChild(div);	
			console.log(name);	
		}



}

