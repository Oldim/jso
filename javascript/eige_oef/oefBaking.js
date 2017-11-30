// var cookies = {
// 	instructions: "Preheat oven to 350...",
// 	bake: function (time){
// 		console.log("Baking the cookies.");
//         setTimeout(done, time);
// 	} 
// };

// function done(){
// 	console.log("Cookies are ready, take them out to cool.");
// 	console.log("Cooling the cookies.");
// 	setTimeout(cooled, 1000);
// }

// function cooled() {
// 	console.log("Cookies are cool, time to eat!");
// }

// console.log("Time to bake the cookies.");
// cookies.bake(2500);

// ------ KORTER ------
// var cooled = function () {
//     console.log("Cookies are cool, time to eat!");
// };

// var done = function () {
//     console.log("Cookies are ready, take them out to cool.");
// 	console.log("Cooling the cookies.");
// 	setTimeout(cooled, 1000);
// };



// console.log("Time to bake the cookies.");
// cookies.bake(2500);


// ------  NOG KORTER ------
var cookies = {
	instructions: "Preheat oven to 350...",
	bake: function (time){
        console.log("Baking the cookies.");
        setTimeout( function () {
            console.log("Cookies are ready, take them out to cool.");
            console.log("Cooling the cookies.");
            setTimeout(function () {
                console.log("Cookies are cool, time to eat!");
            }, 1000);
        }, time);
	} 
};

console.log("Time to bake the cookies.");
cookies.bake(2500);



