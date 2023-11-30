const server = require('./src/app.js');
const { conn } = require('./src/db.js');

//Conexión a BD && levantamiento del servidor
// conn.authenticate.then(() => {
//   server.listen(3001 , () => {
//     console.log('Servidor arriba en el puerto 3001');
//   });
// });

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Servidor arriba en el puerto 3001');
  });
});