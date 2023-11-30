const { Router } = require('express');
const empleadoRouter = require('./empleadoRouter');

const router = Router();

router.use('/empleado', empleadoRouter);


module.exports = router;
