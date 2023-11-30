const { Empleado } = require('../db');

const createEmpleado = async (nombre, cargo, jefeId) => {
    const newCliente = await Empleado.create({ nombre, cargo, jefeId });
    return newCliente;
};

const getEmpleado = async () => {
    const results = await Empleado.findAll();
    return results;
};

const getEmpleadoJerarquia = async () => {
    const results = await Empleado.findAll({
        include: [
          { model: Empleado, as: 'subordinados', attributes: ['nombre', 'cargo'] },
        ],
      });
      
    return results;
};

const updateEmpleado = async (idEmpleado, nuevoJefeId) => {
    const empleado = await Empleado.findByPk(idEmpleado);
    const nuevoJefe = await Empleado.findByPk(nuevoJefeId);

    if (empleado && nuevoJefe) {
        
        empleado.version += 1;
        empleado.fechaCambioJefe = new Date();
        await empleado.save();

        empleado.setJefe(nuevoJefe);
        await nuevoJefe.save();

        return 200;
    }else{
        return 406;
    }
};


module.exports = {
    createEmpleado,
    getEmpleado,
    getEmpleadoJerarquia,
    updateEmpleado
};