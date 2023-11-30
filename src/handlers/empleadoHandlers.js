const { createEmpleado, getEmpleado, getEmpleadoJerarquia, updateEmpleado } = require('../controllers/empleadoControllers')

const createEmpleadoHandler = async (req, res) => {
    try {
        const { nombre, cargo, jefeId } = req.body;
        const newEmpleado = await createEmpleado(nombre, cargo, jefeId);
        res.status(201).json(newEmpleado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getEmpleadoHandler = async (req, res) => {
    try {
        const results = await getEmpleado();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
};

const getEmpleadoJerarquiaHandler = async (req, res) => {
    try {
        const results = await getEmpleadoJerarquia();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
};

const updateJefeHandler = async (req, res) => {
    try {
      const { idEmpleado } = req.params;
      const { nuevoJefeId } = req.body;
      const results = await updateEmpleado(idEmpleado, nuevoJefeId);
    //   console.log(results);
      res.status(results).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };


module.exports = {
    createEmpleadoHandler,
    getEmpleadoHandler,
    getEmpleadoJerarquiaHandler,
    updateJefeHandler
};