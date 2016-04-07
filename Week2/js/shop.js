var customerName = "Mintra";
var totalPrice = 0;
var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;
var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = totalPrice;

var products = [
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Watch",
	"Android Phone",
];
var prices = [10, 10, 199, 159];
var productsText ="";
var productsElement = document.getElementById("product-list");

productsText += "<li class ='list-group-item'><span class= 'badge'>$" + prices[0]+"</span>" + products[0] + "</li>";
productsText += "<li class ='list-group-item'><span class= 'badge'>$" + prices[1]+"</span>" + products[1] + "</li>";
productsText += "<li class ='list-group-item'><span class= 'badge'>$" + prices[2]+"</span>" + products[2] + "</li>";
productsText += "<li class ='list-group-item'><span class= 'badge'>$" + prices[3]+"</span>" + products[3] + "</li>";
productsElement.innerHTML = productsText;

var actualTotalPrice = prices[0] + prices[1] + prices[2] + prices[3];
var decimalDiscount = 0.25;
var percentageDiscount = document.getElementById("percentDiscount");
percentageDiscount.textContent = decimalDiscount * 100 + "% off";
var discountTotalPriceElement = document.getElementById("total-price");
discountTotalPriceElement.textContent = actualTotalPrice - actualTotalPrice * decimalDiscount + "   ";

var greeting = "";
var hour = new Date().getHours();
var greetingText = document.getElementById("greeting-text");
if (hour > 0 && hour <= 12) {
	greeting = "Good Morning";
}
	else if (hour > 12 && hour <=17)	{
		greeting = "Good Afternoon";
	}
	else{
		greeting = "Good Evening";
	}
greetingText.textContent = greeting;



