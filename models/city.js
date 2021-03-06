'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.Region);
      City.hasMany(models.Town);
      City.hasMany(models.Headquarter);
      City.hasMany(models.TransitedPlace);
      City.hasMany(models.BranchOffice);
    }
  };
  City.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    telephonePrefix: DataTypes.STRING,
    CountryId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    RegionId: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    gmt: DataTypes.NUMBER,
    locationRef: DataTypes.GEOMETRY,
    zoomMap: DataTypes.SMALLINT,
    zipCode: DataTypes.INTEGER
  }, {
    sequelize,
    schema: "globals",
    modelName: 'City',
  });
  return City;
};