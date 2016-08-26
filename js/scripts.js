//Business logic
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
  var toppings = $("input[type='checkbox']:checked").length;
  if (toppings > 6) {
    alert("Whoa there buddy, if you have that many toppings we can't make your pizza! Try scaling it back to 6 or fewer toppings.")
    location.reload();
  }
  //Couldn't figure out how to count checkboxes without jQuery
  var toppings = toppings * 1.5;
  var pizzaFinalCost = pizzaFinalCost + toppings;
  return pizzaFinalCost;
}

//User interface logic
$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=optradio]:checked").val();
    var pizza = new Pizza(size);
    totalCost = pizza.pizzaFinalCost();
    $("#totalCost").text("$" + totalCost + "!");
  });
});
