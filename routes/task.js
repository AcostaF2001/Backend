const express = require('express');
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');
const { listarTasks, crearTask, actualizarTasks, eliminarTasks } = require('../Controllers/task.js')

router.use( validarJWT )

router.get('/', listarTasks)
router.post('/', crearTask)
router.put('/:id', actualizarTasks)
router.delete('/:id', eliminarTasks)

module.exports = router; 