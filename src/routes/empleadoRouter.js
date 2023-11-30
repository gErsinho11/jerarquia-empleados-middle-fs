const { Router } = require('express');
const empleadoRouter = Router();

const { createEmpleadoHandler, getEmpleadoHandler, getEmpleadoJerarquiaHandler, updateJefeHandler } = require('../handlers/empleadoHandlers');

empleadoRouter.post('/', createEmpleadoHandler);
empleadoRouter.get('/', getEmpleadoHandler);
empleadoRouter.get('/jerarquia', getEmpleadoJerarquiaHandler);
empleadoRouter.put('/:idEmpleado', updateJefeHandler);


module.exports = empleadoRouter;