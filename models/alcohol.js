module.exports = function(sequelize, DataTypes) {
  var Alcohol = sequelize.define("Alcohol", {
    type : DataTypes.STRING,
    name : DataTypes.TEXT,
    image : DataTypes.TEXT,
    tag : DataTypes.TEXT,
     },  {
      timestamp : false,
      createdAt: false,
      updatedAt: false,
    });


   Alcohol.associate = function(models) {
    
    Alcohol.belongsToMany(models.Occasion, {
      through : {
        model: models.OccasionAlcohol
      } 
     });
    Alcohol.belongsToMany(models.Event, {
      through: {
        model: models.EventAlcohol
      }
    });
  };
  return Alcohol;
};

// NEED to do Events next for hasmany

