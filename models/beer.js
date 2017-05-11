module.exports = function(sequelize, DataTypes) {
  var TxBeer = sequelize.define("TxBeer", {
    name: DataTypes.STRING,
    abv: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ibu: {
      type: DataTypes.STRING,
      allowNull: true
    },
    style: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gen_style: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ounces: {
      type: DataTypes.STRING,
      allowNull: true
    },
    brewery_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
    }, {
      timestamps: false
    });
  return TxBeer;
};


