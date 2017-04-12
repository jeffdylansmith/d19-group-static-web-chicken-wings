console.log("hello");

var divElement = document.getElementById("products");


var productArray = [
    {
        name: "Defcon",
        description: "Not for the Weak!",
        price: "$4.99",
        image: "images/defcon-sauce.jpg",
    },
    {
        name: "Teriyaki",
        description: "The flavors of the Orient in yo mouth!",
        price: "$4.99",
        image: "images/teriyaki-sauce.jpg",
    },
    {
        name: "Scorpion",
        description: "Taste of the dessert!",
        price: "$4.99",
        image: "images/scorpion-sauce.jpg",
    },
    {
        name: "Honey BBQ",
        description: "Smokey and Sweet!",
        price: "$4.99",
        image: "images/honey-bbq-sauce.jpg",
    },
    {
        name: "Hog Rub",
        description: "Doesn't Sound Good!",
        price: "$4.99",
        image: "images/hog-rub.jpg",
    },
    {
        name: "BBQ Rub",
        description: "Big Poppa's Special Blend!",
        price: "$4.99",
        image: "images/bbq-rub.jpg",
    },
    {
        name: "Buffalo Rub",
        description: "It's alright",
        price: "$4.99",
        image: "images/buffalo-rub.jpg",
    },
    {
        name: "Gold Rub",
        description: "Made with Real Gold!",
        price: "$4.99",
        image: "images/gold-rub.jpg",
    }
]


for (prop in productArray) {
    var cards = `<article class="articles">
                    <h2>${productArray[prop].name} </h2>
                    <img class="image-size" src="${productArray[prop].image}">
                    <p class="description">${productArray[prop].description}</p>
                    <p class="price">${productArray[prop].price}</p>
                </article>`;
    divElement.innerHTML += cards;
}
//for (var i = 0; i < productArray.length; i++) {
//    console.log(productArray[i]);
//}
//var testImg = productArray[0];
//var newImg = testImg.image;
//var newDiv = document.getElementById("products");
//newDiv.innerHTML = "<img src=" + newImg + ">";





