require('dotenv').config();
const { Sequelize } = require('sequelize');

const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

//Autenticación en BD Postgres
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/empresa`, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

//Formato de modelos
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

//inyección sequelize
modelDefiners.forEach(model => model(sequelize));


let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);


const { Empleado } = sequelize.models;
console.log(sequelize.models);

//Relaciones
Empleado.hasMany(Empleado, { as: 'subordinados', foreignKey: 'jefeId' });
Empleado.belongsTo(Empleado, { as: 'jefe', foreignKey: 'jefeId' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
