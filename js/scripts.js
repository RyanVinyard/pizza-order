function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.pizzaFinalCost = function(size, toppings) {
  var pizzaFinalCost = 0;
  var toppings = [];
  if (this.pizzaSize === "small") {
    var pizzaFinalCost = pizzaFinalCost + 9;
  }
  else if (this.pizzaSize === "medium") {
    var pizzaFinalCost = pizzaFinalCost + 11;
  }
  else if (this.pizzaSize === "large") {
    var pizzaFinalCost = pizzaFinalCost + 13;
  }
  else if (this.pizzaSize === "gargantuan") {
    var pizzaFinalCost = pizzaFinalCost + 16;
  }
  var toppings = $("[type='checkbox']:checked").length;
  var toppings = toppings * 1.5;
  
  console.log(toppings);
  return pizzaFinalCost;
}

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=optradio]:checked").val();
    var pizza = new Pizza(size);
    console.log(size);
    totalCost = pizza.pizzaFinalCost();
    console.log(totalCost);
    console.log(pizzaFinalCost);
  });
});
