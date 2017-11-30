var products = [{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 15, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function mySort(lijst, fie) {
    return lijst.sort(fie);
}


function sortCal() {
    var sortCal;
    sortCal = products.sort(function (a, b) {
        return a.calories - b.calories;
    });
    return sortCal;
};

function sortNaam() {
    var sortNaam;
    sortNaam = products.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    return sortNaam;
};


function sortColor() {
    var sortColor;
    sortColor = products.sort(function (a, b) {
        var colorA = a.color.toUpperCase(); // ignore upper and lowercase
        var colorB = b.color.toUpperCase(); // ignore upper and lowercase
        if (colorA < colorB) {
            return -1;
        }
        if (colorA > colorB) {
            return 1;
        }
        return 0;
    });
    return sortColor;
};


function sortSold() {
    var sortSold;
    sortSold = products.sort(function (a, b) {
        return a.sold - b.sold;
    });
    return sortSold;
};

// console.log(sortSold());

console.log(mySort(products, function (a, b) {
    return a.calories - b.calories;
}));
console.log(mySort(products, function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
}));