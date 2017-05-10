module.exports = function(sequelize, DataTypes) {
  var TxBeer = sequelize.define("TxBeer", {
    name: DataTypes.STRING,
    abv: DataTypes.FLOAT,
    ibu: DataTypes.FLOAT,
    style: DataTypes.STRING,
    ounces: DataTypes.FLOAT,
    brewery_id: DataTypes.STRING,
    image: DataTypes.STRING
  });
  return TxBeer;
};


