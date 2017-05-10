console.log("hello");

var beersTest = ["one", "two", "three", "four", "five"];
var beers = [];

function selectBeers() {
    console.log("selectBeers is working");

if (beers.length>1) {
    var firstBeer = beers[0];
    var secondBeer = beers[1];
    $("#winningBeerName").html(firstBeer[0].name);
    $("#winningBeerAbv").html(firstBeer[0].abv);
    $("#winningBeerIbu").html(firstBeer[0].ibu);
    $("#winningBeerStyle").html(firstBeer[0].style);
    $("#winningBeerOunces").html(firstBeer[0].ounces);
    $("#winningBeerBrewery").html(firstBeer[0].brewery_id);

    $("#losingBeerName").html(secondBeer[0].name);
    $("#losingBeerAbv").html(secondBeer[0].abv);
    $("#losingBeerIbu").html(secondBeer[0].ibu);
    $("#losingBeerStyle").html(secondBeer[0].style);
    $("#losingBeerOunces").html(secondBeer[0].ounces);
    $("#losingBeerBrewery").html(secondBeer[0].brewery_id);   

}
else { 
    var firstBeer = beers[0];
    console.log("the winner is: " + firstBeer[0].name);
    $("#contestingBeer").empty();
    $("#leadHeader").html(firstBeer[0].name + " is the winner!!");
    $(".beerContainer1").attr("class", "col-lg-12 text-center beerContainer1");
    $(".beerContainer2").attr("class", "col-lg-12");
    }
}

$(document).on("click", "#winningBeer", function() {
    console.log("winning beer click is working");
    beers.splice(1,1);
    console.log(beers);
    selectBeers();
});

$(document).on("click", "#contestingBeer", function() {
    console.log("contesting beer click is working");
    beers.splice(0,1);
    console.log(beers);
    selectBeers();
});

$("#submitCategory").on("click", function(event) {
    event.preventDefault();
    var value = $("#category").val();
    console.log("category click is working");
    console.log(value);
    $.get("api/beers/" + value, function(data) {
        console.log("beers: " + data);
        for (var i=0; i<data.length; i++) {
            var beerBuild = [{
                id: data[i].id,
                name: data[i].name,
                abv: data[i].abv,
                ibu: data[i].ibu,
                style: data[i].style,
                ounces: data[i].ounces,
                brewery_id: data[i].brewery_id,
                image: data[i].image
            }]
            beers.push(beerBuild);
        }
        var firstBeer = beers[0];
        var secondBeer = beers[1];
        console.log("beers: " + JSON.stringify(beers));
        console.log("first beer: " + JSON.stringify(firstBeer));
        console.log("first beer name: " + firstBeer[0].name);
        console.log("second beer name: " + secondBeer[0].name);
    }).done( function() {
        selectBeers();
    });
});


