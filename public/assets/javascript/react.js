var javascript = require("javascript.js");
const beers= [];
const firstbeer = beers[0];
const secondbeer = beers[1];
const $beerContainers = $('.beerContainers');
const $winningBeer = $('#winningBeer', $beerContainers);
const $contestingBeer = $('#contestingBeer', $beerContainers);
$winningBeer.on('click',(event) => {
    const firstbeer =
    beers[Math.floor(Math.random()*beers.length)];

    $winningBeerName.text(firstbeer.name);
    $winningBeerAbv.text(firstbeer.abv);
    $winningBeerIbu.text(firstbeer.$winningBeerIbu);
    $winningBeerStyle.text(firstbeer.style);
    $winningBeerOunces.text(firstbeer.ounces);
    $winningBeerBrewery.text(firstbeer.brewery);

});
$contestingBeer.on('click',(event) => {
    const secondbeer =
    beers[Math.floor(Math.random()*beers.length)];

    $losingBeerName.text(secondbeer.name);
    $losingBeerAbv.text(secondbeer.abv);
    $losingBeerIbu.text(secondbeer.$ibu);
    $losingBeerStyle.text(secondbeer.style);
    $losingBeerOunces.text(secondbeer.ounces);
    $losingBeerBrewery.text(secondbeer.brewery);
    
});
