import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); // ES5 with npm
var javascript = require("javascript.js");
const beers= [];
const firstbeer = beers[0];
const secondbeer = beers[1];
class beerContainer1 extends React.Component {
    render() {
    const $winningBeer = $('#winningBeer');
    const $contestingBeer = $('#contestingBeer');
    $winningBeer.on('click',(event) => {
        const firstbeer =
            beers[Math.floor(Math.random()*beers.length)];

        $winningBeerName.text(beers.name);
        $winningBeerAbv.text(beers.abv);
        $winningBeerIbu.text(beers.$winningBeerIbu);
        $winningBeerStyle.text(beers.style);
        $winningBeerOunces.text(beers.ounces);
        $winningBeerBrewery.text(beers.brewery);

});
    }
}
class beerContainer2 extends React.Component {
    render() {
$contestingBeer.on('click',(event) => {
    const secondbeer =
    beers[Math.floor(Math.random()*beers.length)];

    $losingBeerName.text(beers.name);
    $losingBeerAbv.text(beers.abv);
    $losingBeerIbu.text(beers.$ibu);
    $losingBeerStyle.text(beers.style);
    $losingBeerOunces.text(beers.ounces);
    $losingBeerBrewery.text(beers.brewery);
    
});
    }
}
