var beers = [];
$("#winningBeer").html(beers[0]); 
$('#contestingBeer').html(beers[1]);

console.log('hello');

function selectBeers() {

if (beers.length>1) {
    $("#winningBeer").html(beers[0]);
    $("#contestingBeer").html(beers[1]);
}
else {
    console.log("the winner is: " + beers[0]);
    }
}

$(document).on("click", ".clickMe1", function() {
    console.log("clickMe1 is working");
    beers.splice(1,1);
    console.log(beers);
    selectBeers();
});

$(document).on("click", ".clickMe2", function() {
    console.log("clickMe2 is working");
    beers.splice(0,1);
    console.log(beers);
    selectBeers();
});

selectBeers();