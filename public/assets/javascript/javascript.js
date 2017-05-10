console.log("hello");

var beers = ["one", "two", "three", "four"];
$("#winningBeer").html(beers[0]); 
$('#contestingBeer').html(beers[1]);

function selectBeers() {

if (beers.length>1) {
    $("#winningBeer").html(beers[0]);
    $("#contestingBeer").html(beers[1]);
}
else {    
    console.log("the winner is: " + beers[0]);
    $("#winningBeer").empty();
    $("#contestingBeer").empty();
    $("#winningBeer").html(beers[0] + " is the winner!!");
    }
}

$(document).on("click", "#winningBeer", function() {
    console.log("clickMe1 is working");
    beers.splice(1,1);
    console.log(beers);
    selectBeers();
});

$(document).on("click", "#contestingBeer", function() {
    console.log("clickMe2 is working");
    beers.splice(0,1);
    console.log(beers);
    selectBeers();
});

$("#submitCategory").on("click", function(event) {
    event.preventDefault();
    var value = $("#category").val();
    console.log("category click is working");
    console.log(value);
});

selectBeers();